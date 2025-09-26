// --- DATA ---

// SVG Icons for download buttons
const downloadIcons = {
  windows:
    '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="m9.84 12.663v9.39l-9.84-1.356v-8.034zm0-10.72v9.505h-9.84v-8.145zm14.16 10.72v11.337l-13.082-1.803v-9.534zm0-12.663v11.452h-13.082v-9.649z"/></svg>',
  linux:
    '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.504 0c-0.155 0 -0.315 0.008 -0.48 0.021 -4.226 0.333 -3.105 4.807 -3.17 6.298 -0.076 1.092 -0.3 1.953 -1.05 3.02 -0.885 1.051 -2.127 2.75 -2.716 4.521 -0.278 0.832 -0.41 1.684 -0.287 2.489a0.424 0.424 0 0 0 -0.11 0.135c-0.26 0.268 -0.45 0.6 -0.663 0.839 -0.199 0.199 -0.485 0.267 -0.797 0.4 -0.313 0.136 -0.658 0.269 -0.864 0.68 -0.09 0.189 -0.136 0.394 -0.132 0.602 0 0.199 0.027 0.4 0.055 0.536 0.058 0.399 0.116 0.728 0.04 0.97 -0.249 0.68 -0.28 1.145 -0.106 1.484 0.174 0.334 0.535 0.47 0.94 0.601 0.81 0.2 1.91 0.135 2.774 0.6 0.926 0.466 1.866 0.67 2.616 0.47 0.526 -0.116 0.97 -0.464 1.208 -0.946 0.587 -0.003 1.23 -0.269 2.26 -0.334 0.699 -0.058 1.574 0.267 2.577 0.2 0.025 0.134 0.063 0.198 0.114 0.333l0.003 0.003c0.391 0.778 1.113 1.132 1.884 1.071 0.771 -0.06 1.592 -0.536 2.257 -1.306 0.631 -0.765 1.683 -1.084 2.378 -1.503 0.348 -0.199 0.629 -0.469 0.649 -0.853 0.023 -0.4 -0.2 -0.811 -0.714 -1.376v-0.097l-0.003 -0.003c-0.17 -0.2 -0.25 -0.535 -0.338 -0.926 -0.085 -0.401 -0.182 -0.786 -0.492 -1.046h-0.003c-0.059 -0.054 -0.123 -0.067 -0.188 -0.135a0.357 0.357 0 0 0 -0.19 -0.064c0.431 -1.278 0.264 -2.55 -0.173 -3.694 -0.533 -1.41 -1.465 -2.638 -2.175 -3.483 -0.796 -1.005 -1.576 -1.957 -1.56 -3.368 0.026 -2.152 0.236 -6.133 -3.544 -6.139zm0.529 3.405h0.013c0.213 0 0.396 0.062 0.584 0.198 0.19 0.135 0.33 0.332 0.438 0.533 0.105 0.259 0.158 0.459 0.166 0.724 0 -0.02 0.006 -0.04 0.006 -0.06v0.105a0.086 0.086 0 0 1 -0.004 -0.021l-0.004 -0.024a1.807 1.807 0 0 1 -0.15 0.706 0.953 0.953 0 0 1 -0.213 0.335 0.71 0.71 0 0 0 -0.088 -0.042c-0.104 -0.045 -0.198 -0.064 -0.284 -0.133a1.312 1.312 0 0 0 -0.22 -0.066c0.05 -0.06 0.146 -0.133 0.183 -0.198 0.053 -0.128 0.082 -0.264 0.088 -0.402v-0.02a1.21 1.21 0 0 0 -0.061 -0.4c-0.045 -0.134 -0.101 -0.2 -0.183 -0.333 -0.084 -0.066 -0.167 -0.132 -0.267 -0.132h-0.016c-0.093 0 -0.176 0.03 -0.262 0.132a0.8 0.8 0 0 0 -0.205 0.334 1.18 1.18 0 0 0 -0.09 0.4v0.019c0.002 0.089 0.008 0.179 0.02 0.267 -0.193 -0.067 -0.438 -0.135 -0.607 -0.202a1.635 1.635 0 0 1 -0.018 -0.2v-0.02a1.772 1.772 0 0 1 0.15 -0.768c0.082 -0.22 0.232 -0.406 0.43 -0.533a0.985 0.985 0 0 1 0.594 -0.2zm-2.962 0.059h0.036c0.142 0 0.27 0.048 0.399 0.135 0.146 0.129 0.264 0.288 0.344 0.465 0.09 0.199 0.14 0.4 0.153 0.667v0.004c0.007 0.134 0.006 0.2 -0.002 0.266v0.08c-0.03 0.007 -0.056 0.018 -0.083 0.024 -0.152 0.055 -0.274 0.135 -0.393 0.2 0.012 -0.09 0.013 -0.18 0.003 -0.267v-0.015c-0.012 -0.133 -0.04 -0.2 -0.082 -0.333a0.613 0.613 0 0 0 -0.166 -0.267 0.248 0.248 0 0 0 -0.183 -0.064h-0.021c-0.071 0.006 -0.13 0.04 -0.186 0.132a0.552 0.552 0 0 0 -0.12 0.27 0.944 0.944 0 0 0 -0.023 0.33v0.015c0.012 0.135 0.037 0.2 0.08 0.334 0.046 0.134 0.098 0.2 0.166 0.268 0.01 0.009 0.02 0.018 0.034 0.024 -0.07 0.057 -0.117 0.07 -0.176 0.136a0.304 0.304 0 0 1 -0.131 0.068 2.62 2.62 0 0 1 -0.275 -0.402 1.772 1.772 0 0 1 -0.155 -0.667 1.759 1.759 0 0 1 0.08 -0.668 1.43 1.43 0 0 1 0.283 -0.535c0.128 -0.133 0.26 -0.2 0.418 -0.2zm1.37 1.706c0.332 0 0.733 0.065 1.216 0.399 0.293 0.2 0.523 0.269 1.052 0.468h0.003c0.255 0.136 0.405 0.266 0.478 0.399v-0.131a0.571 0.571 0 0 1 0.016 0.47c-0.123 0.31 -0.516 0.643 -1.063 0.842v0.002c-0.268 0.135 -0.501 0.333 -0.775 0.465 -0.276 0.135 -0.588 0.292 -1.012 0.267a1.139 1.139 0 0 1 -0.448 -0.067 3.566 3.566 0 0 1 -0.322 -0.198c-0.195 -0.135 -0.363 -0.332 -0.612 -0.465v-0.005h-0.005c-0.4 -0.246 -0.616 -0.512 -0.686 -0.71 -0.07 -0.268 -0.005 -0.47 0.193 -0.6 0.224 -0.135 0.38 -0.271 0.483 -0.336 0.104 -0.074 0.143 -0.102 0.176 -0.131h0.002v-0.003c0.169 -0.202 0.436 -0.47 0.839 -0.601 0.139 -0.036 0.294 -0.065 0.466 -0.065zm2.8 2.142c0.358 1.417 1.196 3.475 1.735 4.473 0.286 0.534 0.855 1.659 1.102 3.024 0.156 -0.005 0.33 0.018 0.513 0.064 0.646 -1.671 -0.546 -3.467 -1.089 -3.966 -0.22 -0.2 -0.232 -0.335 -0.123 -0.335 0.59 0.534 1.365 1.572 1.646 2.757 0.13 0.535 0.16 1.104 0.021 1.67 0.067 0.028 0.135 0.06 0.205 0.067 1.032 0.534 1.413 0.938 1.23 1.537v-0.043c-0.06 -0.003 -0.12 0 -0.18 0h-0.016c0.151 -0.467 -0.182 -0.825 -1.065 -1.224 -0.915 -0.4 -1.646 -0.336 -1.77 0.465 -0.008 0.043 -0.013 0.066 -0.018 0.135 -0.068 0.023 -0.139 0.053 -0.209 0.064 -0.43 0.268 -0.662 0.669 -0.793 1.187 -0.13 0.533 -0.17 1.156 -0.205 1.869v0.003c-0.02 0.334 -0.17 0.838 -0.319 1.35 -1.5 1.072 -3.58 1.538 -5.348 0.334a2.645 2.645 0 0 0 -0.402 -0.533 1.45 1.45 0 0 0 -0.275 -0.333c0.182 0 0.338 -0.03 0.465 -0.067a0.615 0.615 0 0 0 0.314 -0.334c0.108 -0.267 0 -0.697 -0.345 -1.163 -0.345 -0.467 -0.931 -0.995 -1.788 -1.521 -0.63 -0.4 -0.986 -0.87 -1.15 -1.396 -0.165 -0.534 -0.143 -1.085 -0.015 -1.645 0.245 -1.07 0.873 -2.11 1.274 -2.763 0.107 -0.065 0.037 0.135 -0.408 0.974 -0.396 0.751 -1.14 2.497 -0.122 3.854a8.123 8.123 0 0 1 0.647 -2.876c0.564 -1.278 1.743 -3.504 1.836 -5.268 0.048 0.036 0.217 0.135 0.289 0.202 0.218 0.133 0.38 0.333 0.59 0.465 0.21 0.201 0.477 0.335 0.876 0.335 0.039 0.003 0.075 0.006 0.11 0.006 0.412 0 0.73 -0.134 0.997 -0.268 0.29 -0.134 0.52 -0.334 0.74 -0.4h0.005c0.467 -0.135 0.835 -0.402 1.044 -0.7zm2.185 8.958c0.037 0.6 0.343 1.245 0.882 1.377 0.588 0.134 1.434 -0.333 1.791 -0.765l0.211 -0.01c0.315 -0.007 0.577 0.01 0.847 0.268l0.003 0.003c0.208 0.199 0.305 0.53 0.391 0.876 0.085 0.4 0.154 0.78 0.409 1.066 0.486 0.527 0.645 0.906 0.636 1.14l0.003 -0.007v0.018l-0.003 -0.012c-0.015 0.262 -0.185 0.396 -0.498 0.595 -0.63 0.401 -1.746 0.712 -2.457 1.57 -0.618 0.737 -1.37 1.14 -2.036 1.191 -0.664 0.053 -1.237 -0.2 -1.574 -0.898l-0.005 -0.003c-0.21 -0.4 -0.12 -1.025 0.056 -1.69 0.176 -0.668 0.428 -1.344 0.463 -1.897 0.037 -0.714 0.076 -1.335 0.195 -1.814 0.12 -0.465 0.308 -0.797 0.641 -0.984l0.045 -0.022zm-10.814 0.049h0.01c0.053 0 0.105 0.005 0.157 0.014 0.376 0.055 0.706 0.333 1.023 0.752l0.91 1.664 0.003 0.003c0.243 0.533 0.754 1.064 1.189 1.637 0.434 0.598 0.77 1.131 0.729 1.57v0.006c-0.057 0.744 -0.48 1.148 -1.125 1.294 -0.645 0.135 -1.52 0.002 -2.395 -0.464 -0.968 -0.536 -2.118 -0.469 -2.857 -0.602 -0.369 -0.066 -0.61 -0.2 -0.723 -0.4 -0.11 -0.2 -0.113 -0.602 0.123 -1.23v-0.004l0.002 -0.003c0.117 -0.334 0.03 -0.752 -0.027 -1.118 -0.055 -0.401 -0.083 -0.71 0.043 -0.94 0.16 -0.334 0.396 -0.4 0.69 -0.533 0.294 -0.135 0.64 -0.202 0.915 -0.47h0.002v-0.002c0.256 -0.268 0.445 -0.601 0.668 -0.838 0.19 -0.201 0.38 -0.336 0.663 -0.336zm7.159 -9.074c-0.435 0.201 -0.945 0.535 -1.488 0.535 -0.542 0 -0.97 -0.267 -1.28 -0.466 -0.154 -0.134 -0.28 -0.268 -0.373 -0.335 -0.164 -0.134 -0.144 -0.333 -0.074 -0.333 0.109 0.016 0.129 0.134 0.199 0.2 0.096 0.066 0.215 0.2 0.36 0.333 0.292 0.2 0.68 0.467 1.167 0.467 0.485 0 1.053 -0.267 1.398 -0.466 0.195 -0.135 0.445 -0.334 0.648 -0.467 0.156 -0.136 0.149 -0.267 0.279 -0.267 0.128 0.016 0.034 0.134 -0.147 0.332a8.097 8.097 0 0 1 -0.69 0.468zm-1.082 -1.583V5.64c-0.006 -0.02 0.013 -0.042 0.029 -0.05 0.074 -0.043 0.18 -0.027 0.26 0.004 0.063 0 0.16 0.067 0.15 0.135 -0.006 0.049 -0.085 0.066 -0.135 0.066 -0.055 0 -0.092 -0.043 -0.141 -0.068 -0.052 -0.018 -0.146 -0.008 -0.163 -0.065zm-0.551 0c-0.02 0.058 -0.113 0.049 -0.166 0.066 -0.047 0.025 -0.086 0.068 -0.14 0.068 -0.05 0 -0.13 -0.02 -0.136 -0.068 -0.01 -0.066 0.088 -0.133 0.15 -0.133 0.08 -0.031 0.184 -0.047 0.259 -0.005 0.019 0.009 0.036 0.03 0.03 0.05v0.02h0.003z"/></svg>',
  mac: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M14.94,5.19A4.38,4.38,0,0,0,16,2,4.44,4.44,0,0,0,13,3.52,4.17,4.17,0,0,0,12,6.61,3.69,3.69,0,0,0,14.94,5.19Zm2.52,7.44a4.51,4.51,0,0,1,2.16-3.81,4.66,4.66,0,0,0-3.66-2c-1.56-.16-3,.91-3.83.91s-2-.89-3.3-.87A4.92,4.92,0,0,0,4.69,9.39C2.93,12.45,4.24,17,6,19.47,6.8,20.68,7.8,22.05,9.12,22s1.75-.82,3.28-.82,2,.82,3.3.79,2.22-1.24,3.06-2.45a11,11,0,0,0,1.38-2.85A4.41,4.41,0,0,1,17.46,12.63ZM14.94,5.19A4.38,4.38,0,0,0,16,2,4.44,4.44,0,0,0,13,3.52,4.17,4.17,0,0,0,12,6.61,3.69,3.69,0,0,0,14.94,5.19Zm2.52,7.44a4.51,4.51,0,0,1,2.16-3.81,4.66,4.66,0,0,0-3.66-2c-1.56-.16-3,.91-3.83.91s-2-.89-3.3-.87A4.92,4.92,0,0,0,4.69,9.39C2.93,12.45,4.24,17,6,19.47,6.8,20.68,7.8,22.05,9.12,22s1.75-.82,3.28-.82,2,.82,3.3.79,2.22-1.24,3.06-2.45a11,11,0,0,0,1.38-2.85A4.41,4.41,0,0,1,17.46,12.63ZM14.94,5.19A4.38,4.38,0,0,0,16,2,4.44,4.44,0,0,0,13,3.52,4.17,4.17,0,0,0,12,6.61,3.69,3.69,0,0,0,14.94,5.19Zm2.52,7.44a4.51,4.51,0,0,1,2.16-3.81,4.66,4.66,0,0,0-3.66-2c-1.56-.16-3,.91-3.83.91s-2-.89-3.3-.87A4.92,4.92,0,0,0,4.69,9.39C2.93,12.45,4.24,17,6,19.47,6.8,20.68,7.8,22.05,9.12,22s1.75-.82,3.28-.82,2,.82,3.3.79,2.22-1.24,3.06-2.45a11,11,0,0,0,1.38-2.85A4.41,4.41,0,0,1,17.46,12.63ZM14.94,5.19A4.38,4.38,0,0,0,16,2,4.44,4.44,0,0,0,13,3.52,4.17,4.17,0,0,0,12,6.61,3.69,3.69,0,0,0,14.94,5.19Zm2.52,7.44a4.51,4.51,0,0,1,2.16-3.81,4.66,4.66,0,0,0-3.66-2c-1.56-.16-3,.91-3.83.91s-2-.89-3.3-.87A4.92,4.92,0,0,0,4.69,9.39C2.93,12.45,4.24,17,6,19.47,6.8,20.68,7.8,22.05,9.12,22s1.75-.82,3.28-.82,2,.82,3.3.79,2.22-1.24,3.06-2.45a11,11,0,0,0,1.38-2.85A4.41,4.41,0,0,1,17.46,12.63ZM14.94,5.19A4.38,4.38,0,0,0,16,2,4.44,4.44,0,0,0,13,3.52,4.17,4.17,0,0,0,12,6.61,3.69,3.69,0,0,0,14.94,5.19Zm2.52,7.44a4.51,4.51,0,0,1,2.16-3.81,4.66,4.66,0,0,0-3.66-2c-1.56-.16-3,.91-3.83.91s-2-.89-3.3-.87A4.92,4.92,0,0,0,4.69,9.39C2.93,12.45,4.24,17,6,19.47,6.8,20.68,7.8,22.05,9.12,22s1.75-.82,3.28-.82,2,.82,3.3.79,2.22-1.24,3.06-2.45a11,11,0,0,0,1.38-2.85A4.41,4.41,0,0,1,17.46,12.63Z"/></svg>',
};

const ASSET_BASE = "./assets";

const gameData = {
  disturbed: {
    title: "Disturbed",
    description:
      "An entrance to an old stronghold was found by a group of hikers. Despite villagers' concerns that the fortress is cursed, the local authorities hired an archeology team to investigate the site. Delve deep into the stronghold and uncover the mysteries but don't get complacent, there seems to be an abomination haunting these ruins.\n\n\nDON'T DIE! DON'T GET TRAPPED!\n\nCAN YOU ESCAPE?",
    imagePath: `${ASSET_BASE}/games/disturbed/banner.webp`,
    thumbPath: `${ASSET_BASE}/games/disturbed/banner.webp`,
    platform: "Windows 10/11",
    engine: "Unreal Engine 5",
    released: "2022",
    downloads: {
      windows: "https://neohermitstudio.itch.io/disturbed",
      linux: null,
      mac: null,
    },
    tags: [
      "Horror",
      "Survival",
      "Indie",
      "Puzzle",
      "3D",
      "Story",
      "Single-player",
    ],
    screenshots: [
      `${ASSET_BASE}/games/disturbed/1.webp`,
      `${ASSET_BASE}/games/disturbed/2.webp`,
      `${ASSET_BASE}/games/disturbed/3.webp`,
      `${ASSET_BASE}/games/disturbed/4.webp`,
      `${ASSET_BASE}/games/disturbed/5.webp`,
      `${ASSET_BASE}/games/disturbed/6.webp`,
    ],
  },
  odalevillage: {
    title: "Odale Village",
    description:
      "Welcome to 🕊️ Ódale Village! A Role-Playing Game to experience the Joys of Living a Simple, Relaxing life in a Beautiful Village.\n\n🏡 Own and live in a Village House!\n👗 Decorate your Avatar from an ever-growing selection of Outfit\n🌾 Become a Farmer, Plant and Harvest crops for Village Food Stock\n🍳 Use the Harvest Stock and become a Chef to Cook your Food\n🪓Become a lumberjack and cut down trees to get Firewood for Village\n🛡️ Become a Guard/Watchmen to Protect & Maintain Peace in the Village\n⚔️ Choose a Quest in Adventurer's Guild to fulfill Village needs (Soon!)\n🐴 Buy, Ride & Keep your Own Horses .\n🙋‍♂️ Socialize & Work with other Villagers to run the Village properly.",
    imagePath: `${ASSET_BASE}/games/odalevillage/banner.webp`,
    thumbPath: `${ASSET_BASE}/games/odalevillage/banner.webp`,
    platform: "PC, Console, Mobile",
    engine: "Roblox Studio",
    released: "2023",
    downloads: {
      windows: "https://www.roblox.com/games/12391755476/dale-Village-Update",
      linux: null,
      mac: null,
    },
    tags: [
      "Roblox",
      "RPG",
      "Fantasy",
      "Simulator",
      "3D",
      "Community",
      "Multiplayer",
    ],
    screenshots: [
      `${ASSET_BASE}/games/odalevillage/1.webp`,
      `${ASSET_BASE}/games/odalevillage/2.webp`,
      `${ASSET_BASE}/games/odalevillage/3.webp`,
      `${ASSET_BASE}/games/odalevillage/4.webp`,
      `${ASSET_BASE}/games/odalevillage/5.webp`,
      `${ASSET_BASE}/games/odalevillage/6.webp`,
      `${ASSET_BASE}/games/odalevillage/7.webp`,
      `${ASSET_BASE}/games/odalevillage/8.webp`,
    ],
  },
  buildthebridge: {
    title: "Build the Bridge",
    description:
      "You are trapped on a small island and needs to reach the next island before the current one sinks.",
    imagePath: `${ASSET_BASE}/games/buildthebridge/banner.webp`,
    thumbPath: `${ASSET_BASE}/games/buildthebridge/banner.webp`,
    platform: "PC, Console, Mobile",
    engine: "Roblox Studio",
    released: "2024",
    downloads: {
      windows: "https://www.roblox.com/games/89489140708330/Build-The-Bridge",
      linux: null,
      mac: null,
    },
    tags: ["Roblox", "Casual", "Arcade", "3D", "Single-player"],
    screenshots: [],
  },
  foreigndelivery: {
    title: "Foreign Delivery",
    description:
      "You're an alien package delivery guy, deliver the packages as fast as possible to obtain a high score.",
    imagePath: `${ASSET_BASE}/games/foreigndelivery/banner.webp`,
    thumbPath: `${ASSET_BASE}/games/foreigndelivery/banner.webp`,
    platform: "PC",
    engine: "Godot",
    released: "2025",
    downloads: {
      windows:
        "https://github.com/Nexilios/SideScrollingDelivery/releases/download/v1.0/DeliveryGame.7z",
      linux: null,
      mac: null,
    },
    tags: ["Arcade", "Casual", "Godot", "2D", "Side-Scroller", "Single-player"],
    screenshots: [
      `${ASSET_BASE}/games/foreigndelivery/1.webp`,
      `${ASSET_BASE}/games/foreigndelivery/2.webp`,
    ],
  },
};

const artCollections = {
  sushi: {
    title: "Low Poly Sushi",
    coverImage: `${ASSET_BASE}/arts/sushi/Sushi - High Contrast - AgX.webp`,
    items: [
      {
        title: "Sushi - High Contrast - AgX",
        image: `${ASSET_BASE}/arts/sushi/Sushi - High Contrast - AgX.webp`,
      },
      {
        title: "Sushi - High Contrast - Filmic",
        image: `${ASSET_BASE}/arts/sushi/Sushi - High Contrast - Filmic.webp`,
      },
    ],
  },
  orientalgarden: {
    title: "Oriental Garden",
    coverImage: `${ASSET_BASE}/arts/orientalchinesegarden/Isometric Chinese Garden - High Contrast - AgX.webp`,
    items: [
      {
        title: "Oriental Garden - High Contrast - AgX",
        image: `${ASSET_BASE}/arts/orientalchinesegarden/Isometric Chinese Garden - High Contrast - AgX.webp`,
      },
    ],
  },
  donut: {
    title: "Donut",
    coverImage: `${ASSET_BASE}/arts/donut/donut.webp`,
    items: [
      {
        title: "Donut - High Contrast - AgX",
        image: `${ASSET_BASE}/arts/donut/donut.webp`,
      },
    ],
  },
  romanarchitecture: {
    title: "Roman Architecture",
    coverImage: `${ASSET_BASE}/arts/romanarchitecture/Roman Architecture - AgX - High - Rev2.webp`,
    items: [
      {
        title: "Roman Architecture - High Contrast - AgX",
        image: `${ASSET_BASE}/arts/romanarchitecture/Roman Architecture - AgX - High - Rev2.webp`,
      },
      {
        title: "Roman Architecture - No Lines - High Contrast - AgX",
        image: `${ASSET_BASE}/arts/romanarchitecture/Roman Architecture - AgX - High - No Lines - Rev2.webp`,
      },
    ],
  },
  lowpolyforest: {
    title: "Low Poly Forest",
    coverImage: `${ASSET_BASE}/arts/lowpolyforest/forest - agx.webp`,
    items: [
      {
        title: "Low Poly Forest - Medium High Contrast - AgX",
        image: `${ASSET_BASE}/arts/lowpolyforest/forest - agx.webp`,
      },
      {
        title: "Low Poly Forest - Medium High Contrast - Filmic",
        image: `${ASSET_BASE}/arts/lowpolyforest/forest - filmic.webp`,
      },
    ],
  },
  bedroom1: {
    title: "Modern Bedroom",
    coverImage: `${ASSET_BASE}/arts/bedroom1/bedroom1 - Cycles - AgX - Medium High.webp`,
    items: [
      {
        title: "Modern Bedroom - Cycles - Medium High Contrast - AgX",
        image: `${ASSET_BASE}/arts/bedroom1/bedroom1 - Cycles - AgX - Medium High.webp`,
      },
      {
        title: "Modern Bedroom - EVEE - High Contrast - Filmic",
        image: `${ASSET_BASE}/arts/bedroom1/bedroom1 - Evee - Filmic - High.webp`,
      },
    ],
  },
  homeoffice: {
    title: "Home Office",
    coverImage: `${ASSET_BASE}/arts/homeoffice/homeoffice - Cycles - AgX - Medium High Contrast.webp`,
    items: [
      {
        title: "Home Office - Cycles - Medium High Contrast - AgX",
        image: `${ASSET_BASE}/arts/homeoffice/homeoffice - Cycles - AgX - Medium High Contrast.webp`,
      },
      {
        title: "Home Office - Cycles - AgX",
        image: `${ASSET_BASE}/arts/homeoffice/homeoffice - Cycles - AgX - Base Contrast.webp`,
      },
      {
        title: "Home Office - EVEE - AgX",
        image: `${ASSET_BASE}/arts/homeoffice/homeoffice - Evee - AgX - Base Contrast.webp`,
      },
    ],
  },
  bedroom2: {
    title: "Cozy Bedroom",
    coverImage: `${ASSET_BASE}/arts/bedroom2/bedroom2 - Cycles - Agx - Medium High.webp`,
    items: [
      {
        title: "Cozy Bedroom - Cycles - Medium High Contrast - AgX",
        image: `${ASSET_BASE}/arts/bedroom2/bedroom2 - Cycles - Agx - Medium High.webp`,
      },
    ],
  },
  cloud66: {
    title: "Cloud 66",
    coverImage: `${ASSET_BASE}/arts/cloud66/cloud66 - Cycles - Filmic.webp`,
    items: [
      {
        title: "Cloud 66 - Cycles - Filmic",
        image: `${ASSET_BASE}/arts/cloud66/cloud66 - Cycles - Filmic.webp`,
      },
      {
        title: "Cloud 66 - Cycles - High Contrast - AgX",
        image: `${ASSET_BASE}/arts/cloud66/cloud66 - Cycles - AgX - High Contrast.webp`,
      },
      {
        title: "Cloud 66 - Cycles - AgX",
        image: `${ASSET_BASE}/arts/cloud66/cloud66 - Cycles - AgX.webp`,
      },
      {
        title: "Cloud 66 - EVEE - Filmic",
        image: `${ASSET_BASE}/arts/cloud66/cloud66 - Evee - Filmic.webp`,
      },
    ],
  },
};

// --- STATE MANAGEMENT ---
const state = {
  currentPage: "home",
  carouselCollection: null,
  carouselIndex: 0,
};

// --- RENDER FUNCTIONS ---

function renderGameGrid() {
  const container = document.getElementById("gameGrid");
  container.innerHTML = Object.entries(gameData)
    .map(([id, game]) => {
      const shortDesc =
        game.description.length > 100
          ? game.description.substring(0, 97) + "..."
          : game.description;
      const tagsHtml = game.tags
        .map((tag) => `<span class="tag">${tag}</span>`)
        .join("");
      return `
            <div class="game-card" data-game-id="${id}">
                <div class="game-thumbnail">
                    <img src="${game.thumbPath}" alt="${game.title} Thumbnail">
                </div>
                <div class="game-info">
                    <div class="game-title">${game.title}</div>
                    <div class="game-description">${shortDesc}</div>
                    <div class="game-tags">${tagsHtml}</div>
                </div>
            </div>`;
    })
    .join("");
}

function renderArtGrid() {
  const container = document.getElementById("artGrid");
  container.innerHTML = Object.entries(artCollections)
    .map(
      ([id, collection]) => `
        <div class="art-card" data-art-id="${id}">
            <img src="${collection.coverImage}" alt="${collection.title} Cover">
            <span class="art-card-title">${collection.title}</span>
        </div>
    `
    )
    .join("");
}

function showGameDetail(gameId) {
  const game = gameData[gameId];
  if (!game) return;

  document.getElementById("gameTitle").textContent = game.title;
  document.getElementById("gameDescription").textContent = game.description;
  document.getElementById("gameBannerImage").src = game.imagePath;
  document.getElementById("gameBannerImage").alt = `${game.title} Banner`;
  document.getElementById(
    "platformDetail"
  ).innerHTML = `<strong>Platform:</strong> ${game.platform}`;
  document.getElementById(
    "engineDetail"
  ).innerHTML = `<strong>Engine:</strong> ${game.engine}`;
  document.getElementById(
    "releasedDetail"
  ).innerHTML = `<strong>Released:</strong> ${game.released}`;

  // Render Download Buttons
  const buttonsContainer = document.getElementById("downloadButtonsContainer");
  const availableDownloads = Object.entries(game.downloads).filter(
    ([, link]) => link
  );
  if (availableDownloads.length === 0) {
    buttonsContainer.innerHTML = `<p style="color: var(--text); font-style: italic;">Download link will be available soon!</p>`;
  } else {
    buttonsContainer.innerHTML = availableDownloads
      .map(([platform, link]) => {
        const platformName =
          platform.charAt(0).toUpperCase() + platform.slice(1);
        return `
                <a class="btn btn-primary download-btn" href="${link}" target="_blank" rel="noopener noreferrer">
                    ${
                      downloadIcons[platform] || ""
                    } Download for ${platformName}
                </a>`;
      })
      .join("");
  }

  // Render Screenshots
  const screenshotsContainer = document.getElementById("gameScreenshots");
  screenshotsContainer.innerHTML = game.screenshots
    .map(
      (src, index) => `
        <div class="screenshot" data-game-screenshot-id="${gameId}" data-screenshot-index="${index}">
            <img src="${src}" alt="${game.title} Screenshot ${index + 1}">
        </div>
    `
    )
    .join("");

  navigateTo("gameDetail");
}

// --- NAVIGATION ---
function navigateTo(page) {
  if (!document.getElementById(page)) return;

  state.currentPage = page;
  history.pushState({ page: page }, "", `#${page}`);

  document
    .querySelectorAll(".page")
    .forEach((p) => p.classList.remove("active"));
  document.getElementById(page).classList.add("active");

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.toggle("active", link.dataset.navigate === page);
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// --- CAROUSEL LOGIC ---
function updateCarousel() {
  const collection = state.carouselCollection;
  if (!collection) return;

  const currentItem = collection.items[state.carouselIndex];
  document.getElementById("carouselContentImage").src = currentItem.image;
  document.getElementById("carouselContentImage").alt = currentItem.title;
  document.getElementById("carouselContentText").textContent =
    currentItem.title;

  const isSingleItem = collection.items.length <= 1;
  document.querySelector(".carousel-prev").style.display = isSingleItem
    ? "none"
    : "block";
  document.querySelector(".carousel-next").style.display = isSingleItem
    ? "none"
    : "block";
}

function openModalCarousel(collection, startIndex = 0) {
  if (!collection || !collection.items || collection.items.length === 0) return;

  state.carouselCollection = collection;
  state.carouselIndex = startIndex;
  updateCarousel();
  document.getElementById("carouselModal").classList.add("active");
}

function closeCarousel() {
  document.getElementById("carouselModal").classList.remove("active");
  state.carouselCollection = null;
}

function changeSlide(direction) {
  if (!state.carouselCollection) return;
  const totalItems = state.carouselCollection.items.length;
  state.carouselIndex =
    (state.carouselIndex + direction + totalItems) % totalItems;
  updateCarousel();
}

// --- EVENT LISTENERS & INITIALIZATION ---

function handleInitialPageLoad() {
  const page = window.location.hash.substring(1);
  navigateTo(page || "home");
}

document.addEventListener("DOMContentLoaded", () => {
  renderGameGrid();
  renderArtGrid();
  handleInitialPageLoad();
});

window.addEventListener("popstate", (e) => {
  if (e.state && e.state.page) {
    navigateTo(e.state.page);
  }
});

document.addEventListener("click", (e) => {
  const target = e.target.closest(
    "[data-navigate], [data-game-id], [data-art-id], [data-game-screenshot-id], [data-command]"
  );

  if (!target) return;
  e.preventDefault();

  const {
    navigate,
    gameId,
    artId,
    gameScreenshotId,
    screenshotIndex,
    command,
  } = target.dataset;

  if (navigate) navigateTo(navigate);
  if (gameId) showGameDetail(gameId);
  if (artId) openModalCarousel(artCollections[artId]);
  if (gameScreenshotId) {
    const game = gameData[gameScreenshotId];
    const screenshotCollection = {
      title: `${game.title} Screenshots`,
      items: game.screenshots.map((src, index) => ({
        title: `${game.title} Screenshot ${index + 1}`,
        image: src,
      })),
    };
    openModalCarousel(screenshotCollection, parseInt(screenshotIndex, 10));
  }
  if (command) {
    const actions = {
      "close-carousel": closeCarousel,
      "next-slide": () => changeSlide(1),
      "prev-slide": () => changeSlide(-1),
    };
    actions[command]?.();
  }
});

document.addEventListener("keydown", (e) => {
  if (!document.getElementById("carouselModal").classList.contains("active"))
    return;
  if (e.key === "Escape") closeCarousel();
  if (e.key === "ArrowLeft") changeSlide(-1);
  if (e.key === "ArrowRight") changeSlide(1);
});
