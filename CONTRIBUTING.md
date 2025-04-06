# Contributing to Streamska

Thank you for your interest in contributing to Streamska! We welcome all forms of contributions, including bug reports, feature requests, documentation improvements, and code contributions.

We want this community to be friendly and respectful to each other. Please follow our [Code of Conduct](./CODE_OF_CONDUCT.md) in all your interactions with the project.

## Getting Started

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

## Development Workflow

### Running the App

- For iOS:
    ```sh
    yarn ios
    ```
- For Android:
    ```sh
    yarn android
    ```

### Code Quality

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
├── app/              # Main application code
├── android/          # Android-specific code
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
