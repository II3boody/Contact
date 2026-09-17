# Contributing to Contact Page

First off, thank you for considering contributing to this project! It's people like you that make the open-source community such a fantastic place to learn, inspire, and create.

## Where do I go from here?

If you've noticed a bug or have a feature request, make one! It's generally best if you get confirmation of your bug or approval for your feature request this way before starting to code.

## Fork & create a branch

If this is something you think you can fix, then fork the repository and create a branch with a descriptive name.

A good branch name would be (where issue #325 is the ticket you're working on):

```sh
git checkout -b 325-add-new-social-icon
```

## Get the test suite running

Make sure you have Node installed, then run:

```sh
npm install
npm run dev
```

## Implement your fix or feature

At this point, you're ready to make your changes! Feel free to ask for help; everyone is a beginner at first.

## Make a Pull Request

At this point, you should switch back to your master branch and make sure it's up to date with the main repository:

```sh
git remote add upstream https://github.com/II3boody/Contact.git
git checkout main
git pull upstream main
```

Then update your feature branch from your local copy of master, and push it!

```sh
git checkout 325-add-new-social-icon
git rebase main
git push --set-upstream origin 325-add-new-social-icon
```

Finally, go to GitHub and make a Pull Request.

## Code of Conduct

Please note that this project is released with a Contributor Code of Conduct. By participating in this project you agree to abide by its terms.
