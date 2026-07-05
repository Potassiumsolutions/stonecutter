# Stonecutter 🧱

A kids' math game that teaches multiplication the way Egyptian scribes did it 4,000 years ago — using nothing but **doubling and adding**. No times tables required.

**▶️ Play it here: https://potassiumsolutions.github.io/stonecutter/**

## The idea

Every whole number can be built by doubling. To multiply, you double one number over and over, pick the doublings that add up to the other number, and add up the results. It's called Egyptian (or Russian peasant) multiplication, and once it clicks, kids can multiply big numbers in their head.

Stonecutter turns that method into a stone-carving workshop.

## How to play

1. A customer places an order, like **13 baskets × 12 fish**.
2. **Carve stones.** Each new stone doubles the last one (1×, 2×, 4×, 8×…) — and doubling is just adding a number to itself.
3. **Tap stones** so the baskets add up to exactly 13.
4. The fish on those stones add up to the answer.

As you improve, you rank up from **Apprentice → Carver → Scribe → Master**, and each rank hands more of the carving and adding over to you. Watch for **royal orders** — timed boss rounds against the setting sun.

## Build the wonders of the world

Every order you fill earns 🧱 blocks that build **17 real monuments** in rotating 3D, from the Great Pyramid and Stonehenge to the Colosseum, the Taj Mahal, the Moai of Easter Island, and Chichén Itzá. Finish one and its story unlocks in the **🏛️ Museum**, with a real fact or two about each wonder. Complete them all to trigger a golden age.

## Install it on your phone

Stonecutter is a Progressive Web App — it installs to your home screen and works offline.

- **Android/Chrome:** open the link and tap the green **📲 Install on this device** button (or the browser's ⋮ menu → *Add to Home screen*).
- **iOS/Safari:** tap Share → *Add to Home Screen*.

## Tech

- Single-file vanilla HTML / CSS / JavaScript, no build step
- [three.js](https://threejs.org/) for the 3D voxel monuments
- Web Audio API for sound effects and background music
- localStorage for progress; PWA manifest + service worker for offline play

## Credits

Created by **Paul A.T. Ramey** · [www.ksoldesigns.com](https://www.ksoldesigns.com) · Potassium Solutions
