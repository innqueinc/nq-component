import React from 'react';
import Select from 'react-select';
import IconItem from "./IconItem";
const icons = ["bi bi-123", "bi bi-activity", "bi bi-alarm", "bi bi-alarm-fill", "bi bi-align-bottom", "bi bi-align-center", "bi bi-align-end", "bi bi-align-middle", "bi bi-align-start", "bi bi-align-top", "bi bi-alt", "bi bi-app", "bi bi-app-indicator", "bi bi-apple", "bi bi-archive", "bi bi-archive-fill", "bi bi-arrow-90deg-down", "bi bi-arrow-90deg-left", "bi bi-arrow-90deg-right", "bi bi-arrow-90deg-up", "bi bi-arrow-bar-down", "bi bi-arrow-bar-left", "bi bi-arrow-bar-right", "bi bi-arrow-bar-up", "bi bi-arrow-clockwise", "bi bi-arrow-counterclockwise", "bi bi-arrow-down", "bi bi-arrow-down-circle", "bi bi-arrow-down-circle-fill", "bi bi-arrow-down-left-circle", "bi bi-arrow-down-left-circle-fill", "bi bi-arrow-down-left-square", "bi bi-arrow-down-left-square-fill", "bi bi-arrow-down-right-circle", "bi bi-arrow-down-right-circle-fill", "bi bi-arrow-down-right-square", "bi bi-arrow-down-right-square-fill", "bi bi-arrow-down-square", "bi bi-arrow-down-square-fill", "bi bi-arrow-down-left", "bi bi-arrow-down-right", "bi bi-arrow-down-short", "bi bi-arrow-down-up", "bi bi-arrow-left", "bi bi-arrow-left-circle", "bi bi-arrow-left-circle-fill", "bi bi-arrow-left-square", "bi bi-arrow-left-square-fill", "bi bi-arrow-left-right", "bi bi-arrow-left-short", "bi bi-arrow-repeat", "bi bi-arrow-return-left", "bi bi-arrow-return-right", "bi bi-arrow-right", "bi bi-arrow-right-circle", "bi bi-arrow-right-circle-fill", "bi bi-arrow-right-square", "bi bi-arrow-right-square-fill", "bi bi-arrow-right-short", "bi bi-arrow-through-heart", "bi bi-arrow-through-heart-fill", "bi bi-arrow-up", "bi bi-arrow-up-circle", "bi bi-arrow-up-circle-fill", "bi bi-arrow-up-left-circle", "bi bi-arrow-up-left-circle-fill", "bi bi-arrow-up-left-square", "bi bi-arrow-up-left-square-fill", "bi bi-arrow-up-right-circle", "bi bi-arrow-up-right-circle-fill", "bi bi-arrow-up-right-square", "bi bi-arrow-up-right-square-fill", "bi bi-arrow-up-square", "bi bi-arrow-up-square-fill", "bi bi-arrow-up-left", "bi bi-arrow-up-right", "bi bi-arrow-up-short", "bi bi-arrows-angle-contract", "bi bi-arrows-angle-expand", "bi bi-arrows-collapse", "bi bi-arrows-expand", "bi bi-arrows-fullscreen", "bi bi-arrows-move", "bi bi-aspect-ratio", "bi bi-aspect-ratio-fill", "bi bi-asterisk", "bi bi-at", "bi bi-award", "bi bi-award-fill", "bi bi-back", "bi bi-backspace", "bi bi-backspace-fill", "bi bi-backspace-reverse", "bi bi-backspace-reverse-fill", "bi bi-badge-3d", "bi bi-badge-3d-fill", "bi bi-badge-4k", "bi bi-badge-4k-fill", "bi bi-badge-8k", "bi bi-badge-8k-fill", "bi bi-badge-ad", "bi bi-badge-ad-fill", "bi bi-badge-ar", "bi bi-badge-ar-fill", "bi bi-badge-cc", "bi bi-badge-cc-fill", "bi bi-badge-hd", "bi bi-badge-hd-fill", "bi bi-badge-sd", "bi bi-badge-sd-fill", "bi bi-badge-tm", "bi bi-badge-tm-fill", "bi bi-badge-vo", "bi bi-badge-vo-fill", "bi bi-badge-vr", "bi bi-badge-vr-fill", "bi bi-badge-wc", "bi bi-badge-wc-fill", "bi bi-bag", "bi bi-bag-check", "bi bi-bag-check-fill", "bi bi-bag-dash", "bi bi-bag-dash-fill", "bi bi-bag-fill", "bi bi-bag-heart", "bi bi-bag-heart-fill", "bi bi-bag-plus", "bi bi-bag-plus-fill", "bi bi-bag-x", "bi bi-bag-x-fill", "bi bi-balloon", "bi bi-balloon-fill", "bi bi-balloon-heart", "bi bi-balloon-heart-fill", "bi bi-bandaid", "bi bi-bandaid-fill", "bi bi-bank", "bi bi-bank2", "bi bi-bar-chart", "bi bi-bar-chart-fill", "bi bi-bar-chart-line", "bi bi-bar-chart-line-fill", "bi bi-bar-chart-steps", "bi bi-basket", "bi bi-basket-fill", "bi bi-basket2", "bi bi-basket2-fill", "bi bi-basket3", "bi bi-basket3-fill", "bi bi-battery", "bi bi-battery-charging", "bi bi-battery-full", "bi bi-battery-half", "bi bi-behance", "bi bi-bell", "bi bi-bell-fill", "bi bi-bell-slash", "bi bi-bell-slash-fill", "bi bi-bezier", "bi bi-bezier2", "bi bi-bicycle", "bi bi-binoculars", "bi bi-binoculars-fill", "bi bi-blockquote-left", "bi bi-blockquote-right", "bi bi-bluetooth", "bi bi-body-text", "bi bi-book", "bi bi-book-fill", "bi bi-book-half", "bi bi-bookmark", "bi bi-bookmark-check", "bi bi-bookmark-check-fill", "bi bi-bookmark-dash", "bi bi-bookmark-dash-fill", "bi bi-bookmark-fill", "bi bi-bookmark-heart", "bi bi-bookmark-heart-fill", "bi bi-bookmark-plus", "bi bi-bookmark-plus-fill", "bi bi-bookmark-star", "bi bi-bookmark-star-fill", "bi bi-bookmark-x", "bi bi-bookmark-x-fill", "bi bi-bookmarks", "bi bi-bookmarks-fill", "bi bi-bookshelf", "bi bi-boombox", "bi bi-boombox-fill", "bi bi-bootstrap", "bi bi-bootstrap-fill", "bi bi-bootstrap-reboot", "bi bi-border", "bi bi-border-all", "bi bi-border-bottom", "bi bi-border-center", "bi bi-border-inner", "bi bi-border-left", "bi bi-border-middle", "bi bi-border-outer", "bi bi-border-right", "bi bi-border-style", "bi bi-border-top", "bi bi-border-width", "bi bi-bounding-box", "bi bi-bounding-box-circles", "bi bi-box", "bi bi-box-arrow-down-left", "bi bi-box-arrow-down-right", "bi bi-box-arrow-down", "bi bi-box-arrow-in-down", "bi bi-box-arrow-in-down-left", "bi bi-box-arrow-in-down-right", "bi bi-box-arrow-in-left", "bi bi-box-arrow-in-right", "bi bi-box-arrow-in-up", "bi bi-box-arrow-in-up-left", "bi bi-box-arrow-in-up-right", "bi bi-box-arrow-left", "bi bi-box-arrow-right", "bi bi-box-arrow-up", "bi bi-box-arrow-up-left", "bi bi-box-arrow-up-right", "bi bi-box-seam", "bi bi-box2", "bi bi-box2-fill", "bi bi-box2-heart", "bi bi-box2-heart-fill", "bi bi-boxes", "bi bi-braces", "bi bi-braces-asterisk", "bi bi-bricks", "bi bi-briefcase", "bi bi-briefcase-fill", "bi bi-brightness-alt-high", "bi bi-brightness-alt-high-fill", "bi bi-brightness-alt-low", "bi bi-brightness-alt-low-fill", "bi bi-brightness-high", "bi bi-brightness-high-fill", "bi bi-brightness-low", "bi bi-brightness-low-fill", "bi bi-broadcast", "bi bi-broadcast-pin", "bi bi-brush", "bi bi-brush-fill", "bi bi-bucket", "bi bi-bucket-fill", "bi bi-bug", "bi bi-bug-fill", "bi bi-building", "bi bi-bullseye", "bi bi-calculator", "bi bi-calculator-fill", "bi bi-calendar", "bi bi-calendar-check", "bi bi-calendar-check-fill", "bi bi-calendar-date", "bi bi-calendar-date-fill", "bi bi-calendar-day", "bi bi-calendar-day-fill", "bi bi-calendar-event", "bi bi-calendar-event-fill", "bi bi-calendar-fill", "bi bi-calendar-heart", "bi bi-calendar-heart-fill", "bi bi-calendar-minus", "bi bi-calendar-minus-fill", "bi bi-calendar-month", "bi bi-calendar-month-fill", "bi bi-calendar-plus", "bi bi-calendar-plus-fill", "bi bi-calendar-range", "bi bi-calendar-range-fill", "bi bi-calendar-week", "bi bi-calendar-week-fill", "bi bi-calendar-x", "bi bi-calendar-x-fill", "bi bi-calendar2", "bi bi-calendar2-check", "bi bi-calendar2-check-fill", "bi bi-calendar2-date", "bi bi-calendar2-date-fill", "bi bi-calendar2-day", "bi bi-calendar2-day-fill", "bi bi-calendar2-event", "bi bi-calendar2-event-fill", "bi bi-calendar2-fill", "bi bi-calendar2-heart", "bi bi-calendar2-heart-fill", "bi bi-calendar2-minus", "bi bi-calendar2-minus-fill", "bi bi-calendar2-month", "bi bi-calendar2-month-fill", "bi bi-calendar2-plus", "bi bi-calendar2-plus-fill", "bi bi-calendar2-range", "bi bi-calendar2-range-fill", "bi bi-calendar2-week", "bi bi-calendar2-week-fill", "bi bi-calendar2-x", "bi bi-calendar2-x-fill", "bi bi-calendar3", "bi bi-calendar3-event", "bi bi-calendar3-event-fill", "bi bi-calendar3-fill", "bi bi-calendar3-range", "bi bi-calendar3-range-fill", "bi bi-calendar3-week", "bi bi-calendar3-week-fill", "bi bi-calendar4", "bi bi-calendar4-event", "bi bi-calendar4-range", "bi bi-calendar4-week", "bi bi-camera", "bi bi-camera2", "bi bi-camera-fill", "bi bi-camera-reels", "bi bi-camera-reels-fill", "bi bi-camera-video", "bi bi-camera-video-fill", "bi bi-camera-video-off", "bi bi-camera-video-off-fill", "bi bi-capslock", "bi bi-capslock-fill", "bi bi-card-checklist", "bi bi-card-heading", "bi bi-card-image", "bi bi-card-list", "bi bi-card-text", "bi bi-caret-down", "bi bi-caret-down-fill", "bi bi-caret-down-square", "bi bi-caret-down-square-fill", "bi bi-caret-left", "bi bi-caret-left-fill", "bi bi-caret-left-square", "bi bi-caret-left-square-fill", "bi bi-caret-right", "bi bi-caret-right-fill", "bi bi-caret-right-square", "bi bi-caret-right-square-fill", "bi bi-caret-up", "bi bi-caret-up-fill", "bi bi-caret-up-square", "bi bi-caret-up-square-fill", "bi bi-cart", "bi bi-cart-check", "bi bi-cart-check-fill", "bi bi-cart-dash", "bi bi-cart-dash-fill", "bi bi-cart-fill", "bi bi-cart-plus", "bi bi-cart-plus-fill", "bi bi-cart-x", "bi bi-cart-x-fill", "bi bi-cart2", "bi bi-cart3", "bi bi-cart4", "bi bi-cash", "bi bi-cash-coin", "bi bi-cash-stack", "bi bi-cast", "bi bi-chat", "bi bi-chat-dots", "bi bi-chat-dots-fill", "bi bi-chat-fill", "bi bi-chat-heart", "bi bi-chat-heart-fill", "bi bi-chat-left", "bi bi-chat-left-dots", "bi bi-chat-left-dots-fill", "bi bi-chat-left-fill", "bi bi-chat-left-heart", "bi bi-chat-left-heart-fill", "bi bi-chat-left-quote", "bi bi-chat-left-quote-fill", "bi bi-chat-left-text", "bi bi-chat-left-text-fill", "bi bi-chat-quote", "bi bi-chat-quote-fill", "bi bi-chat-right", "bi bi-chat-right-dots", "bi bi-chat-right-dots-fill", "bi bi-chat-right-fill", "bi bi-chat-right-heart", "bi bi-chat-right-heart-fill", "bi bi-chat-right-quote", "bi bi-chat-right-quote-fill", "bi bi-chat-right-text", "bi bi-chat-right-text-fill", "bi bi-chat-square", "bi bi-chat-square-dots", "bi bi-chat-square-dots-fill", "bi bi-chat-square-fill", "bi bi-chat-square-heart", "bi bi-chat-square-heart-fill", "bi bi-chat-square-quote", "bi bi-chat-square-quote-fill", "bi bi-chat-square-text", "bi bi-chat-square-text-fill", "bi bi-chat-text", "bi bi-chat-text-fill", "bi bi-check", "bi bi-check-all", "bi bi-check-circle", "bi bi-check-circle-fill", "bi bi-check-lg", "bi bi-check-square", "bi bi-check-square-fill", "bi bi-check2", "bi bi-check2-all", "bi bi-check2-circle", "bi bi-check2-square", "bi bi-chevron-bar-contract", "bi bi-chevron-bar-down", "bi bi-chevron-bar-expand", "bi bi-chevron-bar-left", "bi bi-chevron-bar-right", "bi bi-chevron-bar-up", "bi bi-chevron-compact-down", "bi bi-chevron-compact-left", "bi bi-chevron-compact-right", "bi bi-chevron-compact-up", "bi bi-chevron-contract", "bi bi-chevron-double-down", "bi bi-chevron-double-left", "bi bi-chevron-double-right", "bi bi-chevron-double-up", "bi bi-chevron-down", "bi bi-chevron-expand", "bi bi-chevron-left", "bi bi-chevron-right", "bi bi-chevron-up", "bi bi-circle", "bi bi-circle-fill", "bi bi-circle-half", "bi bi-slash-circle", "bi bi-circle-square", "bi bi-clipboard", "bi bi-clipboard-check", "bi bi-clipboard-check-fill", "bi bi-clipboard-data", "bi bi-clipboard-data-fill", "bi bi-clipboard-fill", "bi bi-clipboard-heart", "bi bi-clipboard-heart-fill", "bi bi-clipboard-minus", "bi bi-clipboard-minus-fill", "bi bi-clipboard-plus", "bi bi-clipboard-plus-fill", "bi bi-clipboard-pulse", "bi bi-clipboard-x", "bi bi-clipboard-x-fill", "bi bi-clipboard2", "bi bi-clipboard2-check", "bi bi-clipboard2-check-fill", "bi bi-clipboard2-data", "bi bi-clipboard2-data-fill", "bi bi-clipboard2-fill", "bi bi-clipboard2-heart", "bi bi-clipboard2-heart-fill", "bi bi-clipboard2-minus", "bi bi-clipboard2-minus-fill", "bi bi-clipboard2-plus", "bi bi-clipboard2-plus-fill", "bi bi-clipboard2-pulse", "bi bi-clipboard2-pulse-fill", "bi bi-clipboard2-x", "bi bi-clipboard2-x-fill", "bi bi-clock", "bi bi-clock-fill", "bi bi-clock-history", "bi bi-cloud", "bi bi-cloud-arrow-down", "bi bi-cloud-arrow-down-fill", "bi bi-cloud-arrow-up", "bi bi-cloud-arrow-up-fill", "bi bi-cloud-check", "bi bi-cloud-check-fill", "bi bi-cloud-download", "bi bi-cloud-download-fill", "bi bi-cloud-drizzle", "bi bi-cloud-drizzle-fill", "bi bi-cloud-fill", "bi bi-cloud-fog", "bi bi-cloud-fog-fill", "bi bi-cloud-fog2", "bi bi-cloud-fog2-fill", "bi bi-cloud-hail", "bi bi-cloud-hail-fill", "bi bi-cloud-haze", "bi bi-cloud-haze-fill", "bi bi-cloud-haze2", "bi bi-cloud-haze2-fill", "bi bi-cloud-lightning", "bi bi-cloud-lightning-fill", "bi bi-cloud-lightning-rain", "bi bi-cloud-lightning-rain-fill", "bi bi-cloud-minus", "bi bi-cloud-minus-fill", "bi bi-cloud-moon", "bi bi-cloud-moon-fill", "bi bi-cloud-plus", "bi bi-cloud-plus-fill", "bi bi-cloud-rain", "bi bi-cloud-rain-fill", "bi bi-cloud-rain-heavy", "bi bi-cloud-rain-heavy-fill", "bi bi-cloud-slash", "bi bi-cloud-slash-fill", "bi bi-cloud-sleet", "bi bi-cloud-sleet-fill", "bi bi-cloud-snow", "bi bi-cloud-snow-fill", "bi bi-cloud-sun", "bi bi-cloud-sun-fill", "bi bi-cloud-upload", "bi bi-cloud-upload-fill", "bi bi-clouds", "bi bi-clouds-fill", "bi bi-cloudy", "bi bi-cloudy-fill", "bi bi-code", "bi bi-code-slash", "bi bi-code-square", "bi bi-coin", "bi bi-collection", "bi bi-collection-fill", "bi bi-collection-play", "bi bi-collection-play-fill", "bi bi-columns", "bi bi-columns-gap", "bi bi-command", "bi bi-compass", "bi bi-compass-fill", "bi bi-cone", "bi bi-cone-striped", "bi bi-controller", "bi bi-cpu", "bi bi-cpu-fill", "bi bi-credit-card", "bi bi-credit-card-2-back", "bi bi-credit-card-2-back-fill", "bi bi-credit-card-2-front", "bi bi-credit-card-2-front-fill", "bi bi-credit-card-fill", "bi bi-crop", "bi bi-cup", "bi bi-cup-fill", "bi bi-cup-straw", "bi bi-currency-bitcoin", "bi bi-currency-dollar", "bi bi-currency-euro", "bi bi-currency-exchange", "bi bi-currency-pound", "bi bi-currency-yen", "bi bi-cursor", "bi bi-cursor-fill", "bi bi-cursor-text", "bi bi-dash", "bi bi-dash-circle", "bi bi-dash-circle-dotted", "bi bi-dash-circle-fill", "bi bi-dash-lg", "bi bi-dash-square", "bi bi-dash-square-dotted", "bi bi-dash-square-fill", "bi bi-device-hdd", "bi bi-device-hdd-fill", "bi bi-device-ssd", "bi bi-device-ssd-fill", "bi bi-diagram-2", "bi bi-diagram-2-fill", "bi bi-diagram-3", "bi bi-diagram-3-fill", "bi bi-diamond", "bi bi-diamond-fill", "bi bi-diamond-half", "bi bi-dice-1", "bi bi-dice-1-fill", "bi bi-dice-2", "bi bi-dice-2-fill", "bi bi-dice-3", "bi bi-dice-3-fill", "bi bi-dice-4", "bi bi-dice-4-fill", "bi bi-dice-5", "bi bi-dice-5-fill", "bi bi-dice-6", "bi bi-dice-6-fill", "bi bi-disc", "bi bi-disc-fill", "bi bi-discord", "bi bi-display", "bi bi-display-fill", "bi bi-displayport", "bi bi-displayport-fill", "bi bi-distribute-horizontal", "bi bi-distribute-vertical", "bi bi-door-closed", "bi bi-door-closed-fill", "bi bi-door-open", "bi bi-door-open-fill", "bi bi-dot", "bi bi-download", "bi bi-dpad", "bi bi-dpad-fill", "bi bi-dribbble", "bi bi-droplet", "bi bi-droplet-fill", "bi bi-droplet-half", "bi bi-ear", "bi bi-ear-fill", "bi bi-earbuds", "bi bi-easel", "bi bi-easel-fill", "bi bi-easel2", "bi bi-easel2-fill", "bi bi-easel3", "bi bi-easel3-fill", "bi bi-egg", "bi bi-egg-fill", "bi bi-egg-fried", "bi bi-eject", "bi bi-eject-fill", "bi bi-emoji-angry", "bi bi-emoji-angry-fill", "bi bi-emoji-dizzy", "bi bi-emoji-dizzy-fill", "bi bi-emoji-expressionless", "bi bi-emoji-expressionless-fill", "bi bi-emoji-frown", "bi bi-emoji-frown-fill", "bi bi-emoji-heart-eyes", "bi bi-emoji-heart-eyes-fill", "bi bi-emoji-kiss", "bi bi-emoji-kiss-fill", "bi bi-emoji-laughing", "bi bi-emoji-laughing-fill", "bi bi-emoji-neutral", "bi bi-emoji-neutral-fill", "bi bi-emoji-smile", "bi bi-emoji-smile-fill", "bi bi-emoji-smile-upside-down", "bi bi-emoji-smile-upside-down-fill", "bi bi-emoji-sunglasses", "bi bi-emoji-sunglasses-fill", "bi bi-emoji-wink", "bi bi-emoji-wink-fill", "bi bi-envelope", "bi bi-envelope-check", "bi bi-envelope-check-fill", "bi bi-envelope-dash", "bi bi-envelope-dash-fill", "bi bi-envelope-exclamation", "bi bi-envelope-exclamation-fill", "bi bi-envelope-fill", "bi bi-envelope-heart", "bi bi-envelope-heart-fill", "bi bi-envelope-open", "bi bi-envelope-open-fill", "bi bi-envelope-open-heart", "bi bi-envelope-open-heart-fill", "bi bi-envelope-paper", "bi bi-envelope-paper-fill", "bi bi-envelope-paper-heart", "bi bi-envelope-paper-heart-fill", "bi bi-envelope-plus", "bi bi-envelope-plus-fill", "bi bi-envelope-slash", "bi bi-envelope-slash-fill", "bi bi-envelope-x", "bi bi-envelope-x-fill", "bi bi-eraser", "bi bi-eraser-fill", "bi bi-ethernet", "bi bi-exclamation", "bi bi-exclamation-circle", "bi bi-exclamation-circle-fill", "bi bi-exclamation-diamond", "bi bi-exclamation-diamond-fill", "bi bi-exclamation-lg", "bi bi-exclamation-octagon", "bi bi-exclamation-octagon-fill", "bi bi-exclamation-square", "bi bi-exclamation-square-fill", "bi bi-exclamation-triangle", "bi bi-exclamation-triangle-fill", "bi bi-exclude", "bi bi-explicit", "bi bi-explicit-fill", "bi bi-eye", "bi bi-eye-fill", "bi bi-eye-slash", "bi bi-eye-slash-fill", "bi bi-eyedropper", "bi bi-eyeglasses", "bi bi-facebook", "bi bi-fan", "bi bi-file", "bi bi-file-arrow-down", "bi bi-file-arrow-down-fill", "bi bi-file-arrow-up", "bi bi-file-arrow-up-fill", "bi bi-file-bar-graph", "bi bi-file-bar-graph-fill", "bi bi-file-binary", "bi bi-file-binary-fill", "bi bi-file-break", "bi bi-file-break-fill", "bi bi-file-check", "bi bi-file-check-fill", "bi bi-file-code", "bi bi-file-code-fill", "bi bi-file-diff", "bi bi-file-diff-fill", "bi bi-file-earmark", "bi bi-file-earmark-arrow-down", "bi bi-file-earmark-arrow-down-fill", "bi bi-file-earmark-arrow-up", "bi bi-file-earmark-arrow-up-fill", "bi bi-file-earmark-bar-graph", "bi bi-file-earmark-bar-graph-fill", "bi bi-file-earmark-binary", "bi bi-file-earmark-binary-fill", "bi bi-file-earmark-break", "bi bi-file-earmark-break-fill", "bi bi-file-earmark-check", "bi bi-file-earmark-check-fill", "bi bi-file-earmark-code", "bi bi-file-earmark-code-fill", "bi bi-file-earmark-diff", "bi bi-file-earmark-diff-fill", "bi bi-file-earmark-easel", "bi bi-file-earmark-easel-fill", "bi bi-file-earmark-excel", "bi bi-file-earmark-excel-fill", "bi bi-file-earmark-fill", "bi bi-file-earmark-font", "bi bi-file-earmark-font-fill", "bi bi-file-earmark-image", "bi bi-file-earmark-image-fill", "bi bi-file-earmark-lock", "bi bi-file-earmark-lock-fill", "bi bi-file-earmark-lock2", "bi bi-file-earmark-lock2-fill", "bi bi-file-earmark-medical", "bi bi-file-earmark-medical-fill", "bi bi-file-earmark-minus", "bi bi-file-earmark-minus-fill", "bi bi-file-earmark-music", "bi bi-file-earmark-music-fill", "bi bi-file-earmark-pdf", "bi bi-file-earmark-pdf-fill", "bi bi-file-earmark-person", "bi bi-file-earmark-person-fill", "bi bi-file-earmark-play", "bi bi-file-earmark-play-fill", "bi bi-file-earmark-plus", "bi bi-file-earmark-plus-fill", "bi bi-file-earmark-post", "bi bi-file-earmark-post-fill", "bi bi-file-earmark-ppt", "bi bi-file-earmark-ppt-fill", "bi bi-file-earmark-richtext", "bi bi-file-earmark-richtext-fill", "bi bi-file-earmark-ruled", "bi bi-file-earmark-ruled-fill", "bi bi-file-earmark-slides", "bi bi-file-earmark-slides-fill", "bi bi-file-earmark-spreadsheet", "bi bi-file-earmark-spreadsheet-fill", "bi bi-file-earmark-text", "bi bi-file-earmark-text-fill", "bi bi-file-earmark-word", "bi bi-file-earmark-word-fill", "bi bi-file-earmark-x", "bi bi-file-earmark-x-fill", "bi bi-file-earmark-zip", "bi bi-file-earmark-zip-fill", "bi bi-file-easel", "bi bi-file-easel-fill", "bi bi-file-excel", "bi bi-file-excel-fill", "bi bi-file-fill", "bi bi-file-font", "bi bi-file-font-fill", "bi bi-file-image", "bi bi-file-image-fill", "bi bi-file-lock", "bi bi-file-lock-fill", "bi bi-file-lock2", "bi bi-file-lock2-fill", "bi bi-file-medical", "bi bi-file-medical-fill", "bi bi-file-minus", "bi bi-file-minus-fill", "bi bi-file-music", "bi bi-file-music-fill", "bi bi-file-pdf", "bi bi-file-pdf-fill", "bi bi-file-person", "bi bi-file-person-fill", "bi bi-file-play", "bi bi-file-play-fill", "bi bi-file-plus", "bi bi-file-plus-fill", "bi bi-file-post", "bi bi-file-post-fill", "bi bi-file-ppt", "bi bi-file-ppt-fill", "bi bi-file-richtext", "bi bi-file-richtext-fill", "bi bi-file-ruled", "bi bi-file-ruled-fill", "bi bi-file-slides", "bi bi-file-slides-fill", "bi bi-file-spreadsheet", "bi bi-file-spreadsheet-fill", "bi bi-file-text", "bi bi-file-text-fill", "bi bi-file-word", "bi bi-file-word-fill", "bi bi-file-x", "bi bi-file-x-fill", "bi bi-file-zip", "bi bi-file-zip-fill", "bi bi-files", "bi bi-files-alt", "bi bi-filetype-aac", "bi bi-filetype-ai", "bi bi-filetype-bmp", "bi bi-filetype-cs", "bi bi-filetype-css", "bi bi-filetype-csv", "bi bi-filetype-doc", "bi bi-filetype-docx", "bi bi-filetype-exe", "bi bi-filetype-gif", "bi bi-filetype-heic", "bi bi-filetype-html", "bi bi-filetype-java", "bi bi-filetype-jpg", "bi bi-filetype-js", "bi bi-filetype-json", "bi bi-filetype-jsx", "bi bi-filetype-key", "bi bi-filetype-m4p", "bi bi-filetype-md", "bi bi-filetype-mdx", "bi bi-filetype-mov", "bi bi-filetype-mp3", "bi bi-filetype-mp4", "bi bi-filetype-otf", "bi bi-filetype-pdf", "bi bi-filetype-php", "bi bi-filetype-png", "bi bi-filetype-ppt", "bi bi-filetype-pptx", "bi bi-filetype-psd", "bi bi-filetype-py", "bi bi-filetype-raw", "bi bi-filetype-rb", "bi bi-filetype-sass", "bi bi-filetype-scss", "bi bi-filetype-sh", "bi bi-filetype-svg", "bi bi-filetype-tiff", "bi bi-filetype-tsx", "bi bi-filetype-ttf", "bi bi-filetype-txt", "bi bi-filetype-wav", "bi bi-filetype-woff", "bi bi-filetype-xls", "bi bi-filetype-xlsx", "bi bi-filetype-xml", "bi bi-filetype-yml", "bi bi-film", "bi bi-filter", "bi bi-filter-circle", "bi bi-filter-circle-fill", "bi bi-filter-left", "bi bi-filter-right", "bi bi-filter-square", "bi bi-filter-square-fill", "bi bi-fingerprint", "bi bi-flag", "bi bi-flag-fill", "bi bi-flower1", "bi bi-flower2", "bi bi-flower3", "bi bi-folder", "bi bi-folder-check", "bi bi-folder-fill", "bi bi-folder-minus", "bi bi-folder-plus", "bi bi-folder-symlink", "bi bi-folder-symlink-fill", "bi bi-folder-x", "bi bi-folder2", "bi bi-folder2-open", "bi bi-fonts", "bi bi-forward", "bi bi-forward-fill", "bi bi-front", "bi bi-fullscreen", "bi bi-fullscreen-exit", "bi bi-funnel", "bi bi-funnel-fill", "bi bi-gear", "bi bi-gear-fill", "bi bi-gear-wide", "bi bi-gear-wide-connected", "bi bi-gem", "bi bi-gender-ambiguous", "bi bi-gender-female", "bi bi-gender-male", "bi bi-gender-trans", "bi bi-geo", "bi bi-geo-alt", "bi bi-geo-alt-fill", "bi bi-geo-fill", "bi bi-gift", "bi bi-gift-fill", "bi bi-git", "bi bi-github", "bi bi-globe", "bi bi-globe2", "bi bi-google", "bi bi-gpu-card", "bi bi-graph-down", "bi bi-graph-down-arrow", "bi bi-graph-up", "bi bi-graph-up-arrow", "bi bi-grid", "bi bi-grid-1x2", "bi bi-grid-1x2-fill", "bi bi-grid-3x2", "bi bi-grid-3x2-gap", "bi bi-grid-3x2-gap-fill", "bi bi-grid-3x3", "bi bi-grid-3x3-gap", "bi bi-grid-3x3-gap-fill", "bi bi-grid-fill", "bi bi-grip-horizontal", "bi bi-grip-vertical", "bi bi-hammer", "bi bi-hand-index", "bi bi-hand-index-fill", "bi bi-hand-index-thumb", "bi bi-hand-index-thumb-fill", "bi bi-hand-thumbs-down", "bi bi-hand-thumbs-down-fill", "bi bi-hand-thumbs-up", "bi bi-hand-thumbs-up-fill", "bi bi-handbag", "bi bi-handbag-fill", "bi bi-hash", "bi bi-hdd", "bi bi-hdd-fill", "bi bi-hdd-network", "bi bi-hdd-network-fill", "bi bi-hdd-rack", "bi bi-hdd-rack-fill", "bi bi-hdd-stack", "bi bi-hdd-stack-fill", "bi bi-hdmi", "bi bi-hdmi-fill", "bi bi-headphones", "bi bi-headset", "bi bi-headset-vr", "bi bi-heart", "bi bi-heart-arrow", "bi bi-heart-fill", "bi bi-heart-half", "bi bi-heart-pulse", "bi bi-heart-pulse-fill", "bi bi-heartbreak", "bi bi-heartbreak-fill", "bi bi-hearts", "bi bi-heptagon", "bi bi-heptagon-fill", "bi bi-heptagon-half", "bi bi-hexagon", "bi bi-hexagon-fill", "bi bi-hexagon-half", "bi bi-hospital", "bi bi-hospital-fill", "bi bi-hourglass", "bi bi-hourglass-bottom", "bi bi-hourglass-split", "bi bi-hourglass-top", "bi bi-house", "bi bi-house-door", "bi bi-house-door-fill", "bi bi-house-fill", "bi bi-house-heart", "bi bi-house-heart-fill", "bi bi-hr", "bi bi-hurricane", "bi bi-hypnotize", "bi bi-image", "bi bi-image-alt", "bi bi-image-fill", "bi bi-images", "bi bi-inbox", "bi bi-inbox-fill", "bi bi-inboxes-fill", "bi bi-inboxes", "bi bi-incognito", "bi bi-infinity", "bi bi-info", "bi bi-info-circle", "bi bi-info-circle-fill", "bi bi-info-lg", "bi bi-info-square", "bi bi-info-square-fill", "bi bi-input-cursor", "bi bi-input-cursor-text", "bi bi-instagram", "bi bi-intersect", "bi bi-journal", "bi bi-journal-album", "bi bi-journal-arrow-down", "bi bi-journal-arrow-up", "bi bi-journal-bookmark", "bi bi-journal-bookmark-fill", "bi bi-journal-check", "bi bi-journal-code", "bi bi-journal-medical", "bi bi-journal-minus", "bi bi-journal-plus", "bi bi-journal-richtext", "bi bi-journal-text", "bi bi-journal-x", "bi bi-journals", "bi bi-joystick", "bi bi-justify", "bi bi-justify-left", "bi bi-justify-right", "bi bi-kanban", "bi bi-kanban-fill", "bi bi-key", "bi bi-key-fill", "bi bi-keyboard", "bi bi-keyboard-fill", "bi bi-ladder", "bi bi-lamp", "bi bi-lamp-fill", "bi bi-laptop", "bi bi-laptop-fill", "bi bi-layer-backward", "bi bi-layer-forward", "bi bi-layers", "bi bi-layers-fill", "bi bi-layers-half", "bi bi-layout-sidebar", "bi bi-layout-sidebar-inset-reverse", "bi bi-layout-sidebar-inset", "bi bi-layout-sidebar-reverse", "bi bi-layout-split", "bi bi-layout-text-sidebar", "bi bi-layout-text-sidebar-reverse", "bi bi-layout-text-window", "bi bi-layout-text-window-reverse", "bi bi-layout-three-columns", "bi bi-layout-wtf", "bi bi-life-preserver", "bi bi-lightbulb", "bi bi-lightbulb-fill", "bi bi-lightbulb-off", "bi bi-lightbulb-off-fill", "bi bi-lightning", "bi bi-lightning-charge", "bi bi-lightning-charge-fill", "bi bi-lightning-fill", "bi bi-line", "bi bi-link", "bi bi-link-45deg", "bi bi-linkedin", "bi bi-list", "bi bi-list-check", "bi bi-list-columns", "bi bi-list-columns-reverse", "bi bi-list-nested", "bi bi-list-ol", "bi bi-list-stars", "bi bi-list-task", "bi bi-list-ul", "bi bi-lock", "bi bi-lock-fill", "bi bi-magic", "bi bi-magnet", "bi bi-magnet-fill", "bi bi-mailbox", "bi bi-mailbox2", "bi bi-map", "bi bi-map-fill", "bi bi-markdown", "bi bi-markdown-fill", "bi bi-mask", "bi bi-mastodon", "bi bi-medium", "bi bi-megaphone", "bi bi-megaphone-fill", "bi bi-memory", "bi bi-menu-app", "bi bi-menu-app-fill", "bi bi-menu-button", "bi bi-menu-button-fill", "bi bi-menu-button-wide", "bi bi-menu-button-wide-fill", "bi bi-menu-down", "bi bi-menu-up", "bi bi-messenger", "bi bi-meta", "bi bi-mic", "bi bi-mic-fill", "bi bi-mic-mute", "bi bi-mic-mute-fill", "bi bi-microsoft", "bi bi-minecart", "bi bi-minecart-loaded", "bi bi-modem", "bi bi-modem-fill", "bi bi-moisture", "bi bi-moon", "bi bi-moon-fill", "bi bi-moon-stars", "bi bi-moon-stars-fill", "bi bi-mortarboard", "bi bi-mortarboard-fill", "bi bi-motherboard", "bi bi-motherboard-fill", "bi bi-mouse", "bi bi-mouse-fill", "bi bi-mouse2", "bi bi-mouse2-fill", "bi bi-mouse3", "bi bi-mouse3-fill", "bi bi-music-note", "bi bi-music-note-beamed", "bi bi-music-note-list", "bi bi-music-player", "bi bi-music-player-fill", "bi bi-newspaper", "bi bi-nintendo-switch", "bi bi-node-minus", "bi bi-node-minus-fill", "bi bi-node-plus", "bi bi-node-plus-fill", "bi bi-nut", "bi bi-nut-fill", "bi bi-octagon", "bi bi-octagon-fill", "bi bi-octagon-half", "bi bi-optical-audio", "bi bi-optical-audio-fill", "bi bi-option", "bi bi-outlet", "bi bi-paint-bucket", "bi bi-palette", "bi bi-palette-fill", "bi bi-palette2", "bi bi-paperclip", "bi bi-paragraph", "bi bi-patch-check", "bi bi-patch-check-fill", "bi bi-patch-exclamation", "bi bi-patch-exclamation-fill", "bi bi-patch-minus", "bi bi-patch-minus-fill", "bi bi-patch-plus", "bi bi-patch-plus-fill", "bi bi-patch-question", "bi bi-patch-question-fill", "bi bi-pause", "bi bi-pause-btn", "bi bi-pause-btn-fill", "bi bi-pause-circle", "bi bi-pause-circle-fill", "bi bi-pause-fill", "bi bi-paypal", "bi bi-pc", "bi bi-pc-display", "bi bi-pc-display-horizontal", "bi bi-pc-horizontal", "bi bi-pci-card", "bi bi-peace", "bi bi-peace-fill", "bi bi-pen", "bi bi-pen-fill", "bi bi-pencil", "bi bi-pencil-fill", "bi bi-pencil-square", "bi bi-pentagon", "bi bi-pentagon-fill", "bi bi-pentagon-half", "bi bi-people", "bi bi-person-circle", "bi bi-people-fill", "bi bi-percent", "bi bi-person", "bi bi-person-badge", "bi bi-person-badge-fill", "bi bi-person-bounding-box", "bi bi-person-check", "bi bi-person-check-fill", "bi bi-person-dash", "bi bi-person-dash-fill", "bi bi-person-fill", "bi bi-person-heart", "bi bi-person-hearts", "bi bi-person-lines-fill", "bi bi-person-plus", "bi bi-person-plus-fill", "bi bi-person-rolodex", "bi bi-person-square", "bi bi-person-video", "bi bi-person-video2", "bi bi-person-video3", "bi bi-person-workspace", "bi bi-person-x", "bi bi-person-x-fill", "bi bi-phone", "bi bi-phone-fill", "bi bi-phone-flip", "bi bi-phone-landscape", "bi bi-phone-landscape-fill", "bi bi-phone-vibrate", "bi bi-phone-vibrate-fill", "bi bi-pie-chart", "bi bi-pie-chart-fill", "bi bi-piggy-bank", "bi bi-piggy-bank-fill", "bi bi-pin", "bi bi-pin-angle", "bi bi-pin-angle-fill", "bi bi-pin-fill", "bi bi-pin-map", "bi bi-pin-map-fill", "bi bi-pinterest", "bi bi-pip", "bi bi-pip-fill", "bi bi-play", "bi bi-play-btn", "bi bi-play-btn-fill", "bi bi-play-circle", "bi bi-play-circle-fill", "bi bi-play-fill", "bi bi-playstation", "bi bi-plug", "bi bi-plug-fill", "bi bi-plugin", "bi bi-plus", "bi bi-plus-circle", "bi bi-plus-circle-dotted", "bi bi-plus-circle-fill", "bi bi-plus-lg", "bi bi-plus-slash-minus", "bi bi-plus-square", "bi bi-plus-square-dotted", "bi bi-plus-square-fill", "bi bi-postage", "bi bi-postage-fill", "bi bi-postage-heart", "bi bi-postage-heart-fill", "bi bi-postcard", "bi bi-postcard-fill", "bi bi-postcard-heart", "bi bi-postcard-heart-fill", "bi bi-power", "bi bi-printer", "bi bi-printer-fill", "bi bi-projector", "bi bi-projector-fill", "bi bi-puzzle", "bi bi-puzzle-fill", "bi bi-qr-code", "bi bi-qr-code-scan", "bi bi-question", "bi bi-question-circle", "bi bi-question-diamond", "bi bi-question-diamond-fill", "bi bi-question-circle-fill", "bi bi-question-lg", "bi bi-question-octagon", "bi bi-question-octagon-fill", "bi bi-question-square", "bi bi-question-square-fill", "bi bi-quora", "bi bi-quote", "bi bi-radioactive", "bi bi-rainbow", "bi bi-receipt", "bi bi-receipt-cutoff", "bi bi-reception-0", "bi bi-reception-1", "bi bi-reception-2", "bi bi-reception-3", "bi bi-reception-4", "bi bi-record", "bi bi-record-btn", "bi bi-record-btn-fill", "bi bi-record-circle", "bi bi-record-circle-fill", "bi bi-record-fill", "bi bi-record2", "bi bi-record2-fill", "bi bi-recycle", "bi bi-reddit", "bi bi-reply", "bi bi-reply-all", "bi bi-reply-all-fill", "bi bi-reply-fill", "bi bi-robot", "bi bi-router", "bi bi-router-fill", "bi bi-rss", "bi bi-rss-fill", "bi bi-rulers", "bi bi-safe", "bi bi-safe-fill", "bi bi-safe2", "bi bi-safe2-fill", "bi bi-save", "bi bi-save-fill", "bi bi-save2", "bi bi-save2-fill", "bi bi-scissors", "bi bi-screwdriver", "bi bi-sd-card", "bi bi-sd-card-fill", "bi bi-search", "bi bi-search-heart", "bi bi-search-heart-fill", "bi bi-segmented-nav", "bi bi-send", "bi bi-send-check", "bi bi-send-check-fill", "bi bi-send-dash", "bi bi-send-dash-fill", "bi bi-send-exclamation", "bi bi-send-exclamation-fill", "bi bi-send-fill", "bi bi-send-plus", "bi bi-send-plus-fill", "bi bi-send-slash", "bi bi-send-slash-fill", "bi bi-send-x", "bi bi-send-x-fill", "bi bi-server", "bi bi-share", "bi bi-share-fill", "bi bi-shield", "bi bi-shield-check", "bi bi-shield-exclamation", "bi bi-shield-fill", "bi bi-shield-fill-check", "bi bi-shield-fill-exclamation", "bi bi-shield-fill-minus", "bi bi-shield-fill-plus", "bi bi-shield-fill-x", "bi bi-shield-lock", "bi bi-shield-lock-fill", "bi bi-shield-minus", "bi bi-shield-plus", "bi bi-shield-shaded", "bi bi-shield-slash", "bi bi-shield-slash-fill", "bi bi-shield-x", "bi bi-shift", "bi bi-shift-fill", "bi bi-shop", "bi bi-shop-window", "bi bi-shuffle", "bi bi-signal", "bi bi-signpost", "bi bi-signpost-2", "bi bi-signpost-2-fill", "bi bi-signpost-fill", "bi bi-signpost-split", "bi bi-signpost-split-fill", "bi bi-sim", "bi bi-sim-fill", "bi bi-skip-backward", "bi bi-skip-backward-btn", "bi bi-skip-backward-btn-fill", "bi bi-skip-backward-circle", "bi bi-skip-backward-circle-fill", "bi bi-skip-backward-fill", "bi bi-skip-end", "bi bi-skip-end-btn", "bi bi-skip-end-btn-fill", "bi bi-skip-end-circle", "bi bi-skip-end-circle-fill", "bi bi-skip-end-fill", "bi bi-skip-forward", "bi bi-skip-forward-btn", "bi bi-skip-forward-btn-fill", "bi bi-skip-forward-circle", "bi bi-skip-forward-circle-fill", "bi bi-skip-forward-fill", "bi bi-skip-start", "bi bi-skip-start-btn", "bi bi-skip-start-btn-fill", "bi bi-skip-start-circle", "bi bi-skip-start-circle-fill", "bi bi-skip-start-fill", "bi bi-skype", "bi bi-slack", "bi bi-slash", "bi bi-slash-circle-fill", "bi bi-slash-lg", "bi bi-slash-square", "bi bi-slash-square-fill", "bi bi-sliders", "bi bi-sliders2", "bi bi-sliders2-vertical", "bi bi-smartwatch", "bi bi-snapchat", "bi bi-snow", "bi bi-snow2", "bi bi-snow3", "bi bi-sort-alpha-down", "bi bi-sort-alpha-down-alt", "bi bi-sort-alpha-up", "bi bi-sort-alpha-up-alt", "bi bi-sort-down", "bi bi-sort-down-alt", "bi bi-sort-numeric-down", "bi bi-sort-numeric-down-alt", "bi bi-sort-numeric-up", "bi bi-sort-numeric-up-alt", "bi bi-sort-up", "bi bi-sort-up-alt", "bi bi-soundwave", "bi bi-speaker", "bi bi-speaker-fill", "bi bi-speedometer", "bi bi-speedometer2", "bi bi-spellcheck", "bi bi-spotify", "bi bi-square", "bi bi-square-fill", "bi bi-square-half", "bi bi-stack", "bi bi-stack-overflow", "bi bi-star", "bi bi-star-fill", "bi bi-star-half", "bi bi-stars", "bi bi-steam", "bi bi-stickies", "bi bi-stickies-fill", "bi bi-sticky", "bi bi-sticky-fill", "bi bi-stop", "bi bi-stop-btn", "bi bi-stop-btn-fill", "bi bi-stop-circle", "bi bi-stop-circle-fill", "bi bi-stop-fill", "bi bi-stoplights", "bi bi-stoplights-fill", "bi bi-stopwatch", "bi bi-stopwatch-fill", "bi bi-strava", "bi bi-subtract", "bi bi-suit-club", "bi bi-suit-club-fill", "bi bi-suit-diamond", "bi bi-suit-diamond-fill", "bi bi-suit-heart", "bi bi-suit-heart-fill", "bi bi-suit-spade", "bi bi-suit-spade-fill", "bi bi-sun", "bi bi-sun-fill", "bi bi-sunglasses", "bi bi-sunrise", "bi bi-sunrise-fill", "bi bi-sunset", "bi bi-sunset-fill", "bi bi-symmetry-horizontal", "bi bi-symmetry-vertical", "bi bi-table", "bi bi-tablet", "bi bi-tablet-fill", "bi bi-tablet-landscape", "bi bi-tablet-landscape-fill", "bi bi-tag", "bi bi-tag-fill", "bi bi-tags", "bi bi-tags-fill", "bi bi-telegram", "bi bi-telephone", "bi bi-telephone-fill", "bi bi-telephone-forward", "bi bi-telephone-forward-fill", "bi bi-telephone-inbound", "bi bi-telephone-inbound-fill", "bi bi-telephone-minus", "bi bi-telephone-minus-fill", "bi bi-telephone-outbound", "bi bi-telephone-outbound-fill", "bi bi-telephone-plus", "bi bi-telephone-plus-fill", "bi bi-telephone-x", "bi bi-telephone-x-fill", "bi bi-terminal", "bi bi-terminal-dash", "bi bi-terminal-fill", "bi bi-terminal-plus", "bi bi-terminal-split", "bi bi-terminal-x", "bi bi-text-center", "bi bi-text-indent-left", "bi bi-text-indent-right", "bi bi-text-left", "bi bi-text-paragraph", "bi bi-text-right", "bi bi-textarea", "bi bi-textarea-resize", "bi bi-textarea-t", "bi bi-thermometer", "bi bi-thermometer-half", "bi bi-thermometer-high", "bi bi-thermometer-low", "bi bi-thermometer-snow", "bi bi-thermometer-sun", "bi bi-three-dots", "bi bi-three-dots-vertical", "bi bi-thunderbolt", "bi bi-thunderbolt-fill", "bi bi-ticket", "bi bi-ticket-detailed", "bi bi-ticket-detailed-fill", "bi bi-ticket-fill", "bi bi-ticket-perforated", "bi bi-ticket-perforated-fill", "bi bi-tiktok", "bi bi-toggle-off", "bi bi-toggle-on", "bi bi-toggle2-off", "bi bi-toggle2-on", "bi bi-toggles", "bi bi-toggles2", "bi bi-tools", "bi bi-tornado", "bi bi-translate", "bi bi-trash", "bi bi-trash-fill", "bi bi-trash2", "bi bi-trash2-fill", "bi bi-trash3", "bi bi-trash3-fill", "bi bi-tree", "bi bi-tree-fill", "bi bi-triangle", "bi bi-triangle-fill", "bi bi-triangle-half", "bi bi-trophy", "bi bi-trophy-fill", "bi bi-tropical-storm", "bi bi-truck", "bi bi-truck-flatbed", "bi bi-tsunami", "bi bi-tv", "bi bi-tv-fill", "bi bi-twitch", "bi bi-twitter", "bi bi-type", "bi bi-type-bold", "bi bi-type-h1", "bi bi-type-h2", "bi bi-type-h3", "bi bi-type-italic", "bi bi-type-strikethrough", "bi bi-type-underline", "bi bi-ui-checks", "bi bi-ui-checks-grid", "bi bi-ui-radios", "bi bi-ui-radios-grid", "bi bi-umbrella", "bi bi-umbrella-fill", "bi bi-union", "bi bi-unlock", "bi bi-unlock-fill", "bi bi-upc", "bi bi-upc-scan", "bi bi-upload", "bi bi-usb", "bi bi-usb-c", "bi bi-usb-c-fill", "bi bi-usb-drive", "bi bi-usb-drive-fill", "bi bi-usb-fill", "bi bi-usb-micro", "bi bi-usb-micro-fill", "bi bi-usb-mini", "bi bi-usb-mini-fill", "bi bi-usb-plug", "bi bi-usb-plug-fill", "bi bi-usb-symbol", "bi bi-valentine", "bi bi-valentine2", "bi bi-vector-pen", "bi bi-view-list", "bi bi-view-stacked", "bi bi-vimeo", "bi bi-vinyl", "bi bi-vinyl-fill", "bi bi-voicemail", "bi bi-volume-down", "bi bi-volume-down-fill", "bi bi-volume-mute", "bi bi-volume-mute-fill", "bi bi-volume-off", "bi bi-volume-off-fill", "bi bi-volume-up", "bi bi-volume-up-fill", "bi bi-vr", "bi bi-wallet", "bi bi-wallet-fill", "bi bi-wallet2", "bi bi-watch", "bi bi-water", "bi bi-webcam", "bi bi-webcam-fill", "bi bi-whatsapp", "bi bi-wifi", "bi bi-wifi-1", "bi bi-wifi-2", "bi bi-wifi-off", "bi bi-wind", "bi bi-window", "bi bi-window-dash", "bi bi-window-desktop", "bi bi-window-dock", "bi bi-window-fullscreen", "bi bi-window-plus", "bi bi-window-sidebar", "bi bi-window-split", "bi bi-window-stack", "bi bi-window-x", "bi bi-windows", "bi bi-wordpress", "bi bi-wrench", "bi bi-wrench-adjustable", "bi bi-wrench-adjustable-circle", "bi bi-wrench-adjustable-circle-fill", "bi bi-x", "bi bi-x-circle", "bi bi-x-circle-fill", "bi bi-x-diamond", "bi bi-x-diamond-fill", "bi bi-x-lg", "bi bi-x-octagon", "bi bi-x-octagon-fill", "bi bi-x-square", "bi bi-x-square-fill", "bi bi-xbox", "bi bi-yin-yang", "bi bi-youtube", "bi bi-zoom-in", "bi bi-zoom-out"];

function InputIcon({
  className,
  field,
  object,
  ...props
}) {
  function onChange(values) {
    object[field] = values.value;
  }

  return /*#__PURE__*/React.createElement(Select, {
    options: icons.map(i => {
      return {
        label: i,
        value: i
      };
    }),
    onChange: onChange,
    components: {
      Option: IconItem
    }
  });
}

export default InputIcon;