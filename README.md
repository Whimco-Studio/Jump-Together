# 🐾 Quirkymals: A Non-Combat Social MMORPG 🎮

Welcome to **Quirkymals**, a fun, quirky, non-combat **social MMORPG** where players embody colorful **Quirkymals** and interact with adorable **Dibbit** companions—cute, inanimate objects brought to life! Inspired by the playful vibes of **Fantage** and **Club Penguin**, Quirkymals is all about customization, exploration, and building a vibrant community with friends.

---

## 🧩 **Game Overview**

In **Quirkymals**, you can:
- 🌈 **Customize your Quirkymal** with various skins, outfits, and accessories.
- 🐾 **Collect and care for Dibbits**, quirky pet companions with unique personalities and traits.
- 🏠 **Decorate your own home**, a quirky habitat filled with furniture, Dibbit displays, and fun decor.
- 🎮 **Play minigames** and take part in exciting social activities like dance-offs, fishing competitions, and treasure hunts.
- 💬 **Meet friends, chat, and party**, or host your own in-game events in your custom space.
- 🌍 **Explore unique zones** filled with collectibles, quests, and seasonal events.

---

## 🚀 **Getting Started**

### **1. Requirements**

To contribute to **Quirkymals**, you'll need the following tools installed:
- **[Node.js](https://nodejs.org/)** (For robloxts/TypeScript development)
- **[Rojo](https://rojo.space/)** (For syncing Roblox Studio with your local files)
- **[robloxts](https://roblox-ts.github.io/)** (Roblox TypeScript)
- **[Flamework](https://flamework.dev/)** (Framework for organizing your game structure)
- **[Git](https://git-scm.com/)** (For version control)
- **Roblox Studio** (For developing and testing the game)

### **2. Installation**

Follow these steps to set up the project on your local machine:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/Quirkymals.git
   cd Quirkymals
   ```

2. **Install dependencies:**
   Run the following command to install the required npm packages (robloxts, Flamework, etc.):
   ```bash
   npm install
   ```

3. **Sync with Roblox Studio using Rojo:**
   Make sure **Rojo** is installed and synced with the Roblox project. Update your `*.project.json` files if needed, then run:
   ```bash
   rojo serve
   ```

4. **Build the project:**
   Once everything is set up, compile the TypeScript files:
   ```bash
   npm run build
   ```

5. **Launch Roblox Studio:**
   Open the project in **Roblox Studio** and start building, testing, and playing!

---

## 🎨 **Project Structure**

The repository is organized into the following directories to separate client, server, and shared scripts:

```
/src
  /client       # Client-side scripts and UI
  /server       # Server-side logic and services
  /shared       # Shared modules between client and server
  /minigames    # Minigame-related scripts and assets
  /ui           # User interface components
  /quirkymals   # Quirkymal customization and game logic
  /dibbits      # Dibbit companion system and behavior
  /environments # World environments, zones, and collectibles
```

### **Key Directories:**
- **`/quirkymals`**: This directory holds scripts for Quirkymal customization, traits, and player interaction systems.
- **`/dibbits`**: Contains scripts related to Dibbit behavior, animations, and pet-care systems.
- **`/minigames`**: All the logic and assets for the minigames played by Quirkymals.
- **`/ui`**: UI components for player customization, social features, and in-game interfaces.
- **`/environments`**: Scripts and assets for the different zones players can explore.

---

## ✨ **Features in Development**

Here's a list of core features currently in progress:

1. **Quirkymal Customization** — Customizable outfits, skins, and accessories.
2. **Dibbit Companions** — Collect and care for Dibbit pets, each with unique behaviors.
3. **Home Customization** — Design your own Quirkymal habitat with furniture and Dibbit display areas.
4. **Social & Chat Systems** — Chat with friends, form parties, and trade Dibbits.
5. **Minigames & Events** — Fun activities like races, puzzles, and seasonal events.

---

## 🛠️ **Contributing**

### **How to Contribute:**
1. **Fork the repository** and clone it to your local machine.
2. **Create a new branch** for your feature or bug fix:
   ```bash
   git checkout -b my-feature
   ```
3. Make your changes and test them thoroughly in **Roblox Studio**.
4. **Commit your changes**:
   ```bash
   git commit -m "Add my awesome feature"
   ```
5. **Push to your fork** and submit a **Pull Request**:
   ```bash
   git push origin my-feature
   ```

Please ensure that your code follows the project’s style and is well-documented. We encourage writing **unit tests** for new features, especially those related to core systems (Quirkymal customization, Dibbit management, etc.).

### **Branch Naming Conventions:**
- For new features: `feature/your-feature-name`
- For bug fixes: `bugfix/issue-number`
- For experiments: `experiment/your-idea`

---

## 📄 **Issue Tracking & Roadmap**

We are using **GitHub Issues** to track bugs, feature requests, and improvements. You can view the **roadmap** in the **Projects** section of the repository.

- Found a bug? [Create an Issue](https://github.com/yourusername/Quirkymals/issues).
- Have a feature request? [Let us know](https://github.com/yourusername/Quirkymals/issues/new).
- Want to see what's coming? [Check out the Roadmap](https://github.com/yourusername/Quirkymals/projects).

---

## 🔮 **Future Plans**

We are continuously working to expand and enhance the Quirkymals world. Here are some exciting features planned for future updates:
- **More Minigames** with multiplayer support.
- **New Zones** with collectibles, themed environments, and Dibbit quests.
- **Seasonal Events** with exclusive rewards, skins, and holiday-themed activities.
- **Player-Created Events** where players can host parties, fashion shows, and more in their habitats.

Stay tuned, and feel free to contribute ideas and feedback as we build this quirky, vibrant world together!

---

## 🎉 **License**

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT). Feel free to fork, modify, and contribute to the project.

---

With **Quirkymals**, we're creating a playful, community-driven world where creativity and social interaction take center stage. Dive in, customize your Quirkymal, collect quirky Dibbits, and explore the fun-filled world we're building together! 🌟
