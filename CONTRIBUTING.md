# Contributing to Streamska

<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, sans-serif; max-width: 800px; margin: 0 auto; padding: 2rem; background: linear-gradient(to bottom right, #0a0a1a, #1a0a2a); border-radius: 16px; box-shadow: 0 8px 32px rgba(0,0,0,0.15);">

<style>
  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  .contributing-header {
    background: linear-gradient(90deg, #ff00ff, #ff7b00, #00a2ff);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: gradientShift 10s ease infinite;
    background-size: 200% auto;
  }
  .guide-card {
    background: linear-gradient(145deg, rgba(26, 28, 44, 0.95), rgba(45, 26, 54, 0.95));
    border-radius: 16px;
    padding: 2rem;
    margin: 2rem 0;
    border: 1px solid rgba(255,123,0,0.15);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .guide-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 25px 50px -12px rgba(255, 123, 0, 0.25);
  }
</style>

<h1 class="contributing-header" style="font-size: 2.5rem; margin-bottom: 2rem;">🌟 Contributing Guide</h1>

<div class="guide-card">
  <h2 style="color: #ff7b00; margin-top: 0;">Thank you for your interest in contributing to Streamska!</h2>
  <p style="color: #e2e8f0; line-height: 1.6;">We welcome all forms of contributions, including bug reports, feature requests, documentation improvements, and code contributions.</p>

We want this community to be friendly and respectful to each other. Please follow our [Code of Conduct](./CODE_OF_CONDUCT.md) in all your interactions with the project.

</div>

<div class="guide-card">
  <h2 style="background: linear-gradient(90deg, #ff00ff, #ff7b00); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; margin-top: 0;">🚀 Getting Started</h2>

### Prerequisites

- Node.js (version specified in `.nvmrc`)
- Yarn package manager
- React Native development environment setup
- iOS development environment (for iOS development)
- Android development environment (for Android development)

### Development Setup

1. Fork the repository
2. Clone your fork:
    ```sh
    git clone https://github.com/Act-Aks/streamska.git
    cd streamska
    ```
3. Install dependencies:
    ```sh
    yarn install
    ```
4. Start the development server:
    ```sh
    yarn start
    ```

</div>

<div class="guide-card">
  <h2 style="background: linear-gradient(90deg, #00a2ff, #ff7b00); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; margin-top: 0;">🛠 Development Workflow</h2>

<div style="margin: 1.5rem 0; padding: 1.5rem; background: rgba(0, 162, 255, 0.1); border-radius: 8px; border-left: 4px solid #00a2ff;">
  <h3 style="color: #00a2ff; margin: 0 0 1rem 0;">🏃♂️ Running the App</h3>

- For iOS:
    ```sh
    yarn ios
    ```
- For Android:
    ```sh
    yarn android
    ```

</div>

<div style="margin: 1.5rem 0; padding: 1.5rem; background: rgba(255, 123, 0, 0.1); border-radius: 8px; border-left: 4px solid #ff7b00;">
  <h3 style="color: #ff7b00; margin: 0 0 1rem 0;">🧼 Code Quality</h3>

We use several tools to maintain code quality:

- TypeScript for type checking
- ESLint for linting
- Prettier for code formatting
- Jest for testing

Run the following commands to ensure your code meets our standards:

```sh
# Type checking
yarn typecheck

# Linting
yarn lint

# Formatting
yarn prettier

# Testing
yarn test
```

### Commit Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification for our commit messages:

- `feat`: New features
- `fix`: Bug fixes
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Test-related changes
- `chore`: Maintenance tasks

Example commit message:

```
feat: add user authentication
fix: resolve login form validation
docs: update README with installation steps
```

### Pull Request Process

1. Create a new branch for your feat/fix:
    ```sh
    git checkout -b feat/your-feature-name
    ```
2. Make your changes
3. Run tests and ensure all checks pass
4. Commit your changes following the commit guidelines
5. Push to your fork
6. Create a Pull Request

### Pull Request Requirements

- Provide a clear description of the changes
- Reference any related issues
- Ensure all tests pass
- Update documentation if necessary
- Follow the code style guidelines
- Keep PRs focused and manageable in size

### Review Process

- PRs will be reviewed by maintainers
- Feedback will be provided if changes are needed
- Once approved, a maintainer will merge your PR

## Project Structure

```
streamska/
├── src/             # Main application code
├── android/         # Android-specific code
├── ios/             # iOS-specific code
├── __tests__/       # Test files
└── ...              # Configuration files
```

## Need Help?

- Check our [Discord server](https://discord.gg/streamska) [Yet to be confirmed]
- Open an issue on GitHub
- Contact the maintainers at above mentioned forums

## License

By contributing to Streamska, you agree that your contributions will be licensed under the project's [LICENSE](LICENSE) file.
