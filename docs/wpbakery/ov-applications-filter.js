/* Oceanview — Brochures "Applications" explorer
 * Progressive enhancement for the static WPBakery markup (classes in
 * oceanview-wpbakery.css). Adds client-side search + product/channel filters.
 *
 * Markup contract (see recipes.html):
 *   [data-ov-apps]
 *     [data-ov-apps-search]              -> <input type="search">
 *     [data-ov-apps-product] .ov-apps-chip[data-value]
 *     [data-ov-apps-channel] .ov-apps-chip[data-value]
 *     [data-ov-apps-count]               -> numeric readout
 *     .ov-apps-group[data-ov-product][data-ov-channel]
 *        .ov-apps-group__head
 *        .ov-apps-group__body
 *        .ov-state-tile[data-ov-name][data-ov-code]
 */
(function () {
  'use strict';

  function text(el) { return (el && el.textContent ? el.textContent : '').toLowerCase(); }

  function initRoot(root) {
    var search = root.querySelector('[data-ov-apps-search]');
    var productWrap = root.querySelector('[data-ov-apps-product]');
    var channelWrap = root.querySelector('[data-ov-apps-channel]');
    var countEl = root.querySelector('[data-ov-apps-count]');
    var groups = Array.prototype.slice.call(root.querySelectorAll('.ov-apps-group'));

    var state = { q: '', product: 'all', channel: 'all' };

    function activeValue(wrap) {
      if (!wrap) return 'all';
      var active = wrap.querySelector('.ov-apps-chip.is-active');
      return active ? (active.getAttribute('data-value') || 'all') : 'all';
    }

    function bindChips(wrap, key) {
      if (!wrap) return;
      Array.prototype.forEach.call(wrap.querySelectorAll('.ov-apps-chip'), function (chip) {
        chip.addEventListener('click', function () {
          Array.prototype.forEach.call(wrap.querySelectorAll('.ov-apps-chip'), function (c) {
            c.classList.remove('is-active');
            c.setAttribute('aria-pressed', 'false');
          });
          chip.classList.add('is-active');
          chip.setAttribute('aria-pressed', 'true');
          state[key] = chip.getAttribute('data-value') || 'all';
          apply();
        });
      });
    }

    function apply() {
      var shown = 0;
      groups.forEach(function (group) {
        var matchProduct = state.product === 'all' || group.getAttribute('data-ov-product') === state.product;
        var matchChannel = state.channel === 'all' || group.getAttribute('data-ov-channel') === state.channel;
        var tiles = Array.prototype.slice.call(group.querySelectorAll('.ov-state-tile'));
        var groupShown = 0;

        tiles.forEach(function (tile) {
          var matchQuery = !state.q ||
            text(tile).indexOf(state.q) !== -1 ||
            (tile.getAttribute('data-ov-name') || '').toLowerCase().indexOf(state.q) !== -1 ||
            (tile.getAttribute('data-ov-code') || '').toLowerCase().indexOf(state.q) !== -1;
          var visible = matchProduct && matchChannel && matchQuery;
          tile.classList.toggle('is-hidden', !visible);
          if (visible) groupShown++;
        });

        var groupVisible = matchProduct && matchChannel && groupShown > 0;
        group.classList.toggle('is-hidden', !groupVisible);
        shown += groupShown;
      });

      if (countEl) countEl.textContent = String(shown);

      var empty = root.querySelector('.ov-apps-empty');
      var groupsWrap = root.querySelector('.ov-apps-groups');
      if (empty) empty.style.display = shown === 0 ? '' : 'none';
      if (groupsWrap) groupsWrap.style.display = shown === 0 ? 'none' : '';
    }

    if (search) {
      search.addEventListener('input', function () {
        state.q = (search.value || '').trim().toLowerCase();
        apply();
      });
    }

    bindChips(productWrap, 'product');
    bindChips(channelWrap, 'channel');

    groups.forEach(function (group) {
      var head = group.querySelector('.ov-apps-group__head');
      var body = group.querySelector('.ov-apps-group__body');
      if (!head || !body) return;
      head.addEventListener('click', function () {
        var open = head.getAttribute('aria-expanded') !== 'false';
        head.setAttribute('aria-expanded', open ? 'false' : 'true');
        body.hidden = open;
      });
    });

    state.product = activeValue(productWrap);
    state.channel = activeValue(channelWrap);
    apply();
  }

  function boot() {
    Array.prototype.forEach.call(document.querySelectorAll('[data-ov-apps]'), initRoot);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
