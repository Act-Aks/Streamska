<div align="center">
  <style>
    @keyframes float {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
      100% { transform: translateY(0px); }
    }
    @keyframes shine {
      0% { background-position: 200% center; }
      100% { background-position: -200% center; }
    }
    .title-container {
      background: linear-gradient(45deg, #1a1c2c, #4a2b50);
      padding: 2rem;
      border-radius: 15px;
      box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15);
      backdrop-filter: blur(4px);
      border: 1px solid rgba(255, 255, 255, 0.18);
      animation: float 6s ease-in-out infinite;
      margin: 2rem 0;
    }
    .gradient-text {
      background: linear-gradient(90deg, #ff00ff, #ff7b00, #00a2ff, #ff00ff);
      background-size: 300% 100%;
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: shine 8s linear infinite;
      font-size: 3.5rem;
      font-weight: 700;
      margin: 0;
      letter-spacing: 1px;
    }
    .subtitle {
      background: linear-gradient(90deg, #ff7b00, #00a2ff);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: 1.2rem;
      font-weight: 500;
      margin-top: 1rem;
      opacity: 0.9;
    }
  </style>
  <div class="title-container">
    <h1 class="gradient-text">🎬 Streamska</h1>
    <p class="subtitle">A Modern Content Streaming App</p>
  </div>

  <div style="background: linear-gradient(45deg, rgba(26, 28, 44, 0.8), rgba(74, 43, 80, 0.8)); padding: 1.5rem; border-radius: 12px; box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15); backdrop-filter: blur(4px); border: 1px solid rgba(255, 255, 255, 0.18); margin: 1.5rem 0; animation: float 6s ease-in-out infinite;">
    <style>
      @keyframes badgeGradient {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      @keyframes badgeReveal {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .badge-container {
        display: flex;
        gap: 1rem;
        justify-content: center;
        margin-bottom: 1rem;
        animation: badgeReveal 1s ease-out forwards;
      }
      .badge-link {
        position: relative;
        transform: translateY(0);
        transition: all 0.3s ease;
      }
      .badge-link:hover {
        transform: translateY(-5px);
      }
      .badge-link::before {
        content: '';
        position: absolute;
        inset: -2px;
        background: linear-gradient(90deg, #ff00ff, #ff7b00, #00a2ff);
        background-size: 200% auto;
        animation: badgeGradient 3s linear infinite;
        border-radius: 5px;
        z-index: -1;
        opacity: 0;
        transition: opacity 0.3s ease;
      }
      .badge-link:hover::before {
        opacity: 1;
      }
      .badge-img {
        border-radius: 4px;
        transition: all 0.3s ease;
      }
      .deps-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1rem;
        margin-top: 2rem;
      }
      .dep-card {
        background: linear-gradient(45deg, #1a1c2c, #4a2b50);
        padding: 1rem;
        border-radius: 8px;
        position: relative;
        overflow: hidden;
        transition: all 0.3s ease;
      }
      .dep-card:hover {
        transform: translateY(-5px);
      }
      .dep-name {
        color: #fff;
        font-size: 1.1em;
        margin: 0;
        background: linear-gradient(90deg, #ff00ff, #ff7b00, #00a2ff);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .dep-version {
        position: absolute;
        top: 0;
        right: 0;
        background: linear-gradient(90deg, #ff00ff, #ff7b00);
        padding: 0.3rem 0.6rem;
        border-radius: 0 8px 0 8px;
        color: #fff;
        font-size: 0.9em;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
      }
      .dep-card:hover .dep-version {
        opacity: 1;
        transform: translateX(0);
      }
    </style>
    <div class="badge-container">
      <a href="https://reactnative.dev" target="_blank" class="badge-link">
        <img class="badge-img" src="https://img.shields.io/badge/Built%20with-React%20Native-61dafb.svg" alt="Built with React Native">
      </a>
      <a href="https://github.com/react-native-community/cli" target="_blank" class="badge-link">
        <img class="badge-img" src="https://img.shields.io/badge/CLI-React%20Native-green.svg" alt="CLI React Native">
      </a>
    </div>
    <p style="color: #fff; text-align: center; margin: 0; font-size: 1.1em; line-height: 1.6; background: linear-gradient(90deg, #ff00ff, #ff7b00, #00a2ff); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; animation: shine 8s linear infinite;">
      This is a <a href="https://reactnative.dev" style="color: inherit; text-decoration: none; font-weight: bold;">React Native</a> project for Android, bootstrapped using <a href="https://github.com/react-native-community/cli" style="color: inherit; text-decoration: none; font-weight: bold;">@react-native-community/cli</a>.
    </p>
    <div class="deps-grid">
      <div class="dep-card">
        <h3 class="dep-name">react</h3>
        <span class="dep-version">19.1.0</span>
      </div>
      <div class="dep-card">
        <h3 class="dep-name">react-native</h3>
        <span class="dep-version">0.78.2</span>
      </div>
      <div class="dep-card">
        <h3 class="dep-name">typescript</h3>
        <span class="dep-version">5.8.3</span>
      </div>
      <div class="dep-card">
        <h3 class="dep-name">jest</h3>
        <span class="dep-version">29.7.0</span>
      </div>
      <div class="dep-card">
        <h3 class="dep-name">eslint</h3>
        <span class="dep-version">9.24.0</span>
      </div>
      <div class="dep-card">
        <h3 class="dep-name">prettier</h3>
        <span class="dep-version">3.5.3</span>
      </div>
    </div>
  </div>
</div>

<div style="background: linear-gradient(135deg, #6366F1, #A855F7, #EC4899); padding: 20px; border-radius: 8px; margin: 20px 0; transition: all 0.5s ease; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); animation: gradientShift 10s ease infinite, backgroundShift 15s ease infinite;" onmouseover="this.style.transform='scale(1.02)'; this.style.boxShadow='0 15px 30px rgba(0, 0, 0, 0.3)'" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 4px 15px rgba(0, 0, 0, 0.2)'">
  <style>
    @keyframes gradientShift {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    @keyframes backgroundShift {
      0% { background-color: rgba(99, 102, 241, 0.1); }
      50% { background-color: rgba(168, 85, 247, 0.1); }
      100% { background-color: rgba(236, 72, 153, 0.1); }
    }
    .animated-text {
      background: linear-gradient(to right, #ff00ff, #ff7b00, #00a2ff);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: gradientShift 10s ease infinite;
      background-size: 200% auto;
      animation: textShine 3s linear infinite;
    }
    @keyframes textShine {
      to { background-position: 200% center; }
    }
  </style>
  <h2 class="animated-text" style="font-size: 2em; margin: 0 0 20px 0; text-shadow: 2px 2px 4px rgba(0,0,0,0.2);">📱 About Streamska</h2>

  <p style="color: white; font-size: 1.1em; line-height: 1.8; text-shadow: 1px 1px 2px rgba(0,0,0,0.1); transition: all 0.3s ease;" onmouseover="this.style.transform='translateX(10px)'" onmouseout="this.style.transform='translateX(0)'">
    Streamska is a content aggregation and streaming application that allows users to browse and watch movies, TV series, and other video content. The app does not host any content itself but rather scrapes and indexes content from various external websites, providing a unified interface for users to discover and access content.
  </p>
</div>

<div style="background: linear-gradient(to right, #1a0033, #33001a); padding: 20px; border-radius: 8px; border-left: 4px solid #ff7b00; margin: 20px 0;">
  <h2 style="background: linear-gradient(to right, #ff00ff, #ff7b00, #00a2ff); -webkit-background-clip: text; -webkit-text-fill-color: transparent; animation: gradientShift 10s ease infinite;">⚖️ Legal Disclaimer</h2>

  <p style="color: #856404;"><strong>IMPORTANT:</strong> Streamska does not host, store, or distribute any media content. It functions solely as an indexing and discovery tool that aggregates metadata and links from publicly available sources on the internet.</p>

  <ul style="color: #856404;">
    <li>All content accessible through this application is hosted by third-party websites.</li>
    <li>We do not claim ownership of any content displayed in the application.</li>
    <li>Users are responsible for ensuring their use of this application complies with local laws regarding content access.</li>
    <li>If you are a content owner and believe your content is being linked without authorization, please contact us for prompt removal.</li>
  </ul>

  <p style="color: #856404;">The developers of Streamska are not responsible for and have no control over the content that users access through the application.</p>
</div>

<div style="background: linear-gradient(to right, #1a0033, #33001a); padding: 20px; border-radius: 8px; border-left: 4px solid #ff7b00; margin: 20px 0;">
  <h1 style="background: linear-gradient(to right, #ff00ff, #ff7b00, #00a2ff); -webkit-background-clip: text; -webkit-text-fill-color: transparent; animation: gradientShift 10s ease infinite;">🚀 Getting Started</h1>

  <details style="margin: 20px 0;">
  <summary style="background: linear-gradient(to right, #1a0033, #33001a); padding: 10px 15px; border-radius: 6px; border-left: 4px solid #ff7b00; cursor: pointer; color: #ff00ff;">
    <strong>iOS Development (Low Priority)</strong>
  </summary>
  <div style="background: rgba(255, 0, 255, 0.1); padding: 15px; border-radius: 0 0 6px 6px; margin-top: 5px;">
    <p style="color: #ff00ff; margin: 0;">iOS development is currently a lower priority. Setup instructions are available here for reference.</p>
  </div>
</details>

  <h2 style="background: linear-gradient(to right, #ff00ff, #ff7b00, #00a2ff); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-top: 20px; animation: gradientShift 10s ease infinite;">📋 Prerequisites</h2>

  <p style="color: #ff00ff;">Make sure you have completed the <a href="https://reactnative.dev/docs/environment-setup" style="color: #ff7b00; text-decoration: none;">React Native Environment Setup</a> (Android section) before proceeding.</p>

  <div style="background: rgba(255, 123, 0, 0.1); padding: 15px; border-radius: 6px; border-left: 4px solid #ff7b00; margin: 10px 0;">
    <p style="color: #ff7b00; margin: 0;"><strong>Important:</strong> This project uses <strong>Yarn</strong> as the package manager. npm is not supported. Please ensure you have Yarn installed before proceeding.</p>
  </div>

  <h3 style="background: linear-gradient(to right, #ff00ff, #ff7b00, #00a2ff); -webkit-background-clip: text; -webkit-text-fill-color: transparent; animation: gradientShift 10s ease infinite;">Required tools:</h3>
  <ul style="color: #ff00ff;">
    <li>Node.js (version specified in <code>.nvmrc</code>)</li>
    <li>Yarn package manager</li>
    <li>Android development environment</li>
  </ul>
</div>

<div style="background: linear-gradient(to right, #1a0033, #33001a); padding: 20px; border-radius: 8px; border-left: 4px solid #ff7b00; margin: 20px 0;">
  <h2 style="background: linear-gradient(to right, #ff00ff, #ff7b00, #00a2ff); -webkit-background-clip: text; -webkit-text-fill-color: transparent; animation: gradientShift 10s ease infinite;">🔧 Step 1: Start Metro</h2>

  <p style="color: #ff00ff;">First, you will need to run <strong>Metro</strong>, the JavaScript build tool for React Native.</p>

  <p style="color: #ff00ff;">To start the Metro dev server, run the following command from the root of your React Native project:</p>

  <div style="background: rgba(255, 123, 0, 0.1); padding: 15px; border-radius: 6px; border-left: 4px solid #ff7b00; margin: 10px 0;">
    <code style="color: #ff7b00;">yarn start</code>
  </div>
</div>

<div style="background: linear-gradient(to right, #1a0033, #33001a); padding: 20px; border-radius: 8px; border-left: 4px solid #ff7b00; margin: 20px 0;">
  <h2 style="background: linear-gradient(to right, #ff00ff, #ff7b00, #00a2ff); -webkit-background-clip: text; -webkit-text-fill-color: transparent; animation: gradientShift 10s ease infinite;">📱 Step 2: Build and run your app on Android</h2>

  <p style="color: #ff00ff;">With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android app:</p>

  <div style="background: rgba(255, 123, 0, 0.1); padding: 15px; border-radius: 6px; border-left: 4px solid #ff7b00; margin: 10px 0;">
    <code style="color: #ff7b00;">yarn android</code>
  </div>

  <p style="color: #ff00ff;">If everything is set up correctly, you should see your new app running in the Android Emulator or your connected Android device.</p>

  <div style="background: rgba(255, 123, 0, 0.1); padding: 15px; border-radius: 6px; border-left: 4px solid #ff7b00; margin: 10px 0;">
    <p style="color: #ff7b00; margin: 0;"><strong>Tip:</strong> You can also build the app directly from Android Studio.</p>
  </div>
</div>

<div style="background: linear-gradient(to right, #1a0033, #33001a); padding: 20px; border-radius: 8px; border-left: 4px solid #ff7b00; margin: 20px 0;">
  <h2 style="background: linear-gradient(to right, #ff00ff, #ff7b00, #00a2ff); -webkit-background-clip: text; -webkit-text-fill-color: transparent; animation: gradientShift 10s ease infinite;">💻 Step 3: Modify your app</h2>

  <p style="color: #ff00ff;">Now that you have successfully run the app, let's make changes!</p>

  <p style="color: #ff00ff;">Open <code>App.tsx</code> in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by <a href="https://reactnative.dev/docs/fast-refresh" style="color: #ff7b00; text-decoration: none;">Fast Refresh</a>.</p>

  <div style="background: rgba(255, 123, 0, 0.1); padding: 15px; border-radius: 6px; border-left: 4px solid #ff7b00; margin: 10px 0;">
    <p style="color: #ff7b00; margin: 0;"><strong>Quick Tip:</strong> To forcefully reload the app, press <kbd>R</kbd> key twice or select <strong>"Reload"</strong> from the <strong>Dev Menu</strong> (<kbd>Ctrl</kbd> + <kbd>M</kbd> on Windows/Linux, <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> on macOS).</p>
  </div>
</div>

<div style="background: linear-gradient(to right, #000033, #001a33); padding: 20px; border-radius: 8px; margin: 20px 0;">
  <h1 style="background: linear-gradient(to right, #ff00ff, #ff7b00, #00a2ff); -webkit-background-clip: text; -webkit-text-fill-color: transparent; animation: gradientShift 10s ease infinite;">🔍 Troubleshooting</h1>

  <p style="color: #856404;">If you're having issues getting the above steps to work, see the <a href="https://reactnative.dev/docs/troubleshooting" style="color: #856404; text-decoration: none;">Troubleshooting</a> page.</p>
</div>

<div style="background: linear-gradient(to right, #0d001a, #1a000d); padding: 20px; border-radius: 8px; margin: 20px 0;">
  <style>
    @keyframes treeReveal {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes gradientFlow {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    @keyframes borderGlow {
      0% { border-image-source: linear-gradient(45deg, #ff00ff, #ff7b00); }
      50% { border-image-source: linear-gradient(45deg, #ff7b00, #00a2ff); }
      100% { border-image-source: linear-gradient(45deg, #00a2ff, #ff00ff); }
    }
    .tree-container {
      background: linear-gradient(45deg, rgba(26, 28, 44, 0.9), rgba(74, 43, 80, 0.9));
      padding: 20px;
      border-radius: 12px;
      box-shadow: 0 8px 32px rgba(31, 38, 135, 0.2);
      backdrop-filter: blur(8px);
      border: 2px solid transparent;
      border-image: linear-gradient(45deg, #ff00ff, #ff7b00) 1;
      transition: all 0.3s ease;
    }
    .tree-container:hover {
      transform: translateY(-5px);
      box-shadow: 0 12px 48px rgba(31, 38, 135, 0.3);
      animation: borderGlow 3s linear infinite;
    }
    .tree-item {
      opacity: 0;
      animation: treeReveal 0.5s ease forwards;
      margin: 8px 0;
      padding: 8px 12px;
      display: block;
      font-family: monospace;
      position: relative;
      background: linear-gradient(90deg, rgba(26, 28, 44, 0.6), rgba(74, 43, 80, 0.6));
      border-radius: 6px;
      transition: all 0.3s ease;
      border-left: 3px solid transparent;
      cursor: pointer;
    }
    .tree-item:hover {
      background: linear-gradient(90deg, rgba(26, 28, 44, 0.8), rgba(74, 43, 80, 0.8));
      border-left: 3px solid #ff7b00;
      transform: translateX(10px);
    }
    .tree-item-text {
      background: linear-gradient(90deg, #ff00ff, #ff7b00, #00a2ff);
      background-size: 200% auto;
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: gradientFlow 3s linear infinite;
    }
    .tree-comment {
      color: #888;
      font-style: italic;
      margin-left: 12px;
      opacity: 0.7;
      transition: opacity 0.3s ease;
    }
    .tree-item:hover .tree-comment {
      opacity: 1;
      color: #aaa;
    }
  </style>
  <h1 style="background: linear-gradient(to right, #ff00ff, #ff7b00, #00a2ff); -webkit-background-clip: text; -webkit-text-fill-color: transparent; animation: gradientShift 10s ease infinite;">📁 Project Structure</h1>

  <p style="color: #388e3c;">The Streamska project follows a standard React Native project structure with a focus on maintainability and scalability:</p>

  <div class="tree-container">
    <pre style="margin: 0;">
<span class="tree-item" style="animation-delay: 0.1s;"><span class="tree-item-text">streamska/</span></span>
<span class="tree-item" style="animation-delay: 0.3s;"><span class="tree-item-text">├── android/</span><span class="tree-comment"># Android-specific native code and configuration</span></span>
<span class="tree-item" style="animation-delay: 0.5s;"><span class="tree-item-text">├── ios/</span><span class="tree-comment"># iOS-specific native code and configuration</span></span>
<span class="tree-item" style="animation-delay: 0.7s;"><span class="tree-item-text">├── src/</span><span class="tree-comment"># Main application source code</span></span>
<span class="tree-item" style="animation-delay: 0.9s;"><span class="tree-item-text">│   ├── __specs__/</span><span class="tree-comment"># Test files and its setup</span></span>
<span class="tree-item" style="animation-delay: 1.1s;"><span class="tree-item-text">│   ├── components/</span><span class="tree-comment"># Reusable UI components</span></span>
<span class="tree-item" style="animation-delay: 1.3s;"><span class="tree-item-text">│   ├── screens/</span><span class="tree-comment"># Screen components for different app views</span></span>
<span class="tree-item" style="animation-delay: 1.5s;"><span class="tree-item-text">│   ├── types/</span><span class="tree-comment"># TypeScript type definitions</span></span>
<span class="tree-item" style="animation-delay: 1.7s;"><span class="tree-item-text">│   ├── utils/</span><span class="tree-comment"># Utility functions and helpers</span></span>
<span class="tree-item" style="animation-delay: 1.9s;"><span class="tree-item-text">│   └── index.tsx</span><span class="tree-comment"># Main entry point for the app</span></span>
<span class="tree-item" style="animation-delay: 2.1s;"><span class="tree-item-text">└── config/</span><span class="tree-comment"># Configuration files (babel, eslint, etc.)</span></span></pre>
  </div>

  <div style="background: rgba(46, 125, 50, 0.1); padding: 15px; border-radius: 6px; border-left: 4px solid #2e7d32; margin: 10px 0;">
    <p style="color: #2e7d32; margin: 0;"><strong>Note:</strong> As mentioned earlier, the current development focus is on Android, but the project structure supports both platforms.</p>
  </div>
</div>

<div style="background: linear-gradient(to right, #000033, #001a33); padding: 20px; border-radius: 8px; margin: 20px 0;">
  <h1 style="background: linear-gradient(to right, #ff00ff, #ff7b00, #00a2ff); -webkit-background-clip: text; -webkit-text-fill-color: transparent; animation: gradientShift 10s ease infinite;">📚 Learn More</h1>

  <p style="color: #1976d2;">To learn more about React Native, take a look at the following resources:</p>

  <ul style="color: #1976d2;">
    <li><a href="https://reactnative.dev" style="color: #1976d2; text-decoration: none;">React Native Website</a> - learn more about React Native.</li>
    <li><a href="https://reactnative.dev/docs/environment-setup" style="color: #1976d2; text-decoration: none;">Getting Started</a> - an <strong>overview</strong> of React Native and how setup your environment.</li>
    <li><a href="https://reactnative.dev/docs/getting-started" style="color: #1976d2; text-decoration: none;">Learn the Basics</a> - a <strong>guided tour</strong> of the React Native <strong>basics</strong>.</li>
    <li><a href="https://reactnative.dev/blog" style="color: #1976d2; text-decoration: none;">Blog</a> - read the latest official React Native <strong>Blog</strong> posts.</li>
    <li><a href="https://github.com/facebook/react-native" style="color: #1976d2; text-decoration: none;"><code>@facebook/react-native</code></a> - the Open Source; GitHub <strong>repository</strong> for React Native.</li>
  </ul>
</div>

<details>
<summary style="color: #1976d2; cursor: pointer; padding: 10px; background: linear-gradient(to right, #e3f2fd, #bbdefb); border-radius: 6px; display: inline-block;"><b>🍎 iOS Setup Instructions</b> (Click to expand)</summary>

<div style="background: linear-gradient(to right, #0d001a, #1a000d); padding: 20px; border-radius: 8px; margin: 20px 0;">
  <h2 style="background: linear-gradient(to right, #ff00ff, #ff7b00, #00a2ff); -webkit-background-clip: text; -webkit-text-fill-color: transparent; animation: gradientShift 10s ease infinite;">iOS Setup</h2>

  <div style="background: rgba(66, 66, 66, 0.1); padding: 15px; border-radius: 6px; border-left: 4px solid #424242; margin: 10px 0;">
    <p style="color: #424242; margin: 0;"><strong>Note:</strong> These instructions are provided for reference but are not the current focus of development.</p>
  </div>

  <h3 style="color: #424242;">Prerequisites</h3>

  <p style="color: #616161;">Make sure you have completed the <a href="https://reactnative.dev/docs/environment-setup" style="color: #1976d2; text-decoration: none;">React Native Environment Setup</a> (iOS section) before proceeding.</p>

  <h3 style="color: #424242;">CocoaPods Installation</h3>

  <p style="color: #616161;">For iOS, you need to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).</p>

  <p style="color: #616161;">The first time you create a new project, run the Ruby bundler to install CocoaPods itself:</p>

  <div style="background: #424242; padding: 15px; border-radius: 6px; margin: 10px 0;">
    <code style="color: #ffffff;">bundle install</code>
  </div>

  <p style="color: #616161;">Then, and every time you update your native dependencies, run:</p>

  <div style="background: #424242; padding: 15px; border-radius: 6px; margin: 10px 0;">
    <code style="color: #ffffff;">bundle exec pod install</code>
  </div>

  <p style="color: #616161;">For more information, please visit <a href="https://guides.cocoapods.org/using/getting-started.html" style="color: #1976d2; text-decoration: none;">CocoaPods Getting Started guide</a>.</p>

  <h3 style="color: #424242;">Running on iOS</h3>

  <div style="background: #424242; padding: 15px; border-radius: 6px; margin: 10px 0;">
    <code style="color: #ffffff;">yarn ios</code>
  </div>

  <p style="color: #616161;">If everything is set up correctly, you should see your new app running in the iOS Simulator or your connected iOS device.</p>

  <div style="background: rgba(66, 66, 66, 0.1); padding: 15px; border-radius: 6px; border-left: 4px solid #424242; margin: 10px 0;">
    <p style="color: #424242; margin: 0;"><strong>Tip:</strong> You can also build and run the app directly from Xcode.</p>
  </div>

  <h3 style="color: #424242;">iOS-specific Reload</h3>

  <p style="color: #616161;">To forcefully reload the app on iOS, press <kbd>R</kbd> in iOS Simulator.</p>
</div>

</details>
