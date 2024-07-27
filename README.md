<!-- VERTICAL WHITESPACE -->

<br>
<br>

<!-- LOGO -->

<p align="center">
  <a href="https://namekit.io">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset=".github/logo-dark.svg">
      <img alt="NameKit" src=".github/logo-light.svg" width="auto" height="60">
    </picture>
  </a>
</p>

<!-- TAGLINE -->
<p align="center">
  Easily integrate rich ENS user journeys into your wallet, app, or game.
<p>

<!-- PROJECT SHIELDS -->
<p align="center">
  <a href="LICENSE">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/github/license/namehash/namekit?color=444444">
      <img src="https://img.shields.io/github/license/namehash/namekit?color=444444" alt="MIT License">
    </picture>
  </a>
  <a href="https://github.com/namehash/namekit/actions/workflows/ci_sdk.yml?query=branch%3Amain">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/github/actions/workflow/status/namehash/namekit/ci_sdk.yml?logo=typescript&logoColor=ffffff&color=444444">
      <img src="https://img.shields.io/github/actions/workflow/status/namehash/namekit/ci_sdk.yml?logo=typescript&logoColor=ffffff&color=444444" alt="TypeScript Build Status">
    </picture>
  </a>
  <a href="https://github.com/namehash/namekit/actions/workflows/ci_api.yml?query=branch%3Amain">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/github/actions/workflow/status/namehash/namekit/ci_api.yml?logo=python&logoColor=ffffff&color=444444">
      <img src="https://img.shields.io/github/actions/workflow/status/namehash/namekit/ci_api.yml?logo=python&logoColor=ffffff&color=444444" alt="Python Build Status">
    </picture>
  </a>
  <a href="#project-status">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/badge/status-alpha-444444">
      <img src="https://img.shields.io/badge/status-alpha-444444" alt="status: alpha">
    </picture>
  </a>
</p>

## Project Status

🏗️ NameKit is currently an alpha preview under active development. Expect APIs and interfaces to experience breaking changes.

## Project Directory

The NameKit monorepo contains multiple packages and apps.

### NameKit Packages

<table>
  <thead>
    <tr>
      <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<!-- adding spaces to stop language images from getting smashed --></th>
      <th align="left">Source Code</th>
      <th align="left">Summary</th>
      <th align="left">Deployment&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<!-- adding spaces to make GitHub stop distorting deployment shields --></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/badge/ts-444444?logo=typescript&logoColor=white">
          <img src="https://img.shields.io/badge/ts-444444?logo=typescript&logoColor=white" alt="TypeScript" width="auto" height="17">
        </picture>
      </td>
      <td>
        <a href="packages/namekit-core">namekit-core</a>
      </td>
      <td>Core logic and data types for NameKit. Simplify your interactions with ENS.</td>
      <td>
        <b><i>Coming Soon!</i></b>
      </td>
    </tr>
    <tr>
      <td>
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/badge/tsx-444444?logo=react&logoColor=white">
          <img src="https://img.shields.io/badge/tsx-444444?logo=typescript&logoColor=white" alt="React" width="auto" height="17">
        </picture>
      </td>
      <td>
        <a href="packages/namekit-react">namekit-react</a>
      </td>
      <td>React UI components for building on NameKit.</td>
      <td>
        <a href="https://www.npmjs.com/package/@namehash/namekit-react">
          <picture>
            <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/npm/v/%40namehash%2Fnamekit-react?style=flat&color=444444">
            <img src="https://img.shields.io/npm/v/%40namehash%2Fnamekit-react?style=flat&color=444444" alt="NPM Version" width="auto" height="17">
          </picture>
        </a>
      </td>
    </tr>
    <tr>
      <td>
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/badge/ts-444444?logo=typescript&logoColor=white">
          <img src="https://img.shields.io/badge/ts-444444?logo=typescript&logoColor=white" alt="TypeScript" width="auto" height="17">
        </picture>
      </td>
      <td>
        <a href="packages/ens-utils">ens-utils</a>
        <br>
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/badge/deprecated-e1e1e1">
          <img src="https://img.shields.io/badge/deprecated-e1e1e1" alt="deprecated" width="auto" height="17">
        </picture>
      </td>
      <td>
        General utilities for building on ENS.
      </td>
      <td>
        <a href="https://www.npmjs.com/package/@namehash/ens-utils">
          <picture>
            <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/npm/v/%40namehash%2Fens-utils?style=flat&color=444444">
            <img src="https://img.shields.io/npm/v/%40namehash%2Fens-utils?style=flat&color=444444" alt="NPM Version" width="auto" height="17">
          </picture>
        </a>
      </td>
    </tr>
    <tr>
      <td>
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/badge/sol-444444?logo=ethereum&logoColor=white">
          <img src="https://img.shields.io/badge/sol-444444?logo=ethereum&logoColor=white" alt="Solidity" width="auto" height="17">
        </picture>
      </td>
      <td>
        <a href="https://github.com/namehash/namekit-contracts">namekit-contracts</a>
      </td>
      <td>
        Earn revenue for helping ENS grow.
      </td>
      <td>
        -
      </td>
    </tr>
  </tbody>
</table>

### NameGuard Packages

<table>
  <thead>
    <tr>
      <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<!-- adding spaces to stop language images from getting smashed --></th>
      <th align="left">Source Code</th>
      <th align="left">Summary</th>
      <th align="left">Deployment&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<!-- adding spaces to make GitHub stop distorting deployment shields --></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/badge/ts-444444?logo=typescript&logoColor=white">
          <img src="https://img.shields.io/badge/ts-444444?logo=typescript&logoColor=white" alt="TypeScript" width="auto" height="17">
        </picture>
      </td>
      <td>
        <a href="packages/nameguard-sdk">nameguard-sdk</a>
      </td>
      <td>A lightweight JavaScript client for the NameGuard API.</td>
      <td>
        <a href="https://www.npmjs.com/package/@namehash/nameguard">
          <picture>
            <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/npm/v/%40namehash%2Fnameguard?style=flat&color=444444">
            <img src="https://img.shields.io/npm/v/%40namehash%2Fnameguard?style=flat&color=444444" alt="NPM Version" width="auto" height="17">
          </picture>
        </a>
      </td>
    </tr>
    <tr>
      <td>
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/badge/ts-444444?logo=typescript&logoColor=white">
          <img src="https://img.shields.io/badge/ts-444444?logo=typescript&logoColor=white" alt="TypeScript" width="auto" height="17">
        </picture>
      </td>
      <td>
        <a href="packages/nameguard-js">nameguard-js</a>
      </td>
      <td>A JavaScript implementation of NameGuard. Currently implements securePrimaryName with more coming soon.</td>
      <td>
        <a href="https://www.npmjs.com/package/@namehash/nameguard-js">
          <picture>
            <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/npm/v/%40namehash%2Fnameguard-js?style=flat&color=444444">
            <img src="https://img.shields.io/npm/v/%40namehash%2Fnameguard-js?style=flat&color=444444" alt="NPM Version" width="auto" height="17">
          </picture>
        </a>
      </td>
    </tr>
    <tr>
      <td>
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/badge/tsx-444444?logo=react&logoColor=white">
          <img src="https://img.shields.io/badge/tsx-444444?logo=typescript&logoColor=white" alt="React" width="auto" height="17">
        </picture>
      </td>
      <td>
        <a href="packages/nameguard-react">nameguard-react</a>
      </td>
      <td>React UI components for building on NameGuard.</td>
      <td>
        <a href="https://www.npmjs.com/package/@namehash/nameguard-react">
          <picture>
            <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/npm/v/%40namehash%2Fnameguard-react?style=flat&color=444444">
            <img src="https://img.shields.io/npm/v/%40namehash%2Fnameguard-react?style=flat&color=444444" alt="NPM Version" width="auto" height="17">
          </picture>
        </a>
      </td>
    </tr>
    <tr>
      <td>
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/badge/css-444444?logo=css3&logoColor=white">
          <img src="https://img.shields.io/badge/css-444444?logo=css3&logoColor=white" alt="CSS" width="auto" height="17">
        </picture>
      </td>
      <td>
        <a href="packages/ens-webfont">ens-webfont</a>
      </td>
      <td>Increase rendering support for emojis and other special graphemes that may appear in ENS names.</td>
      <td>
        <a href="https://www.npmjs.com/package/@namehash/ens-webfont">
          <picture>
            <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/npm/v/%40namehash%2Fens-webfont?style=flat&color=444444">
            <img src="https://img.shields.io/npm/v/%40namehash%2Fens-webfont?style=flat&color=444444" alt="NPM Version" width="auto" height="17">
          </picture>
        </a>
      </td>
    </tr>
    <tr>
      <td>
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/badge/py-444444?logo=python&logoColor=white">
          <img src="https://img.shields.io/badge/py-444444?logo=python&logoColor=white" alt="Python" width="auto" height="17">
        </picture>
      </td>
      <td>
        <a href="https://github.com/namehash/ens-normalize-python">ens-normalize-python</a>
      </td>
      <td>Python implementation of ENSIP-15 (ENS Normalize).</td>
      <td>
        <a href="https://pypi.org/project/ens-normalize/">
          <picture>
            <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/pypi/v/ens-normalize?style=flat&color=444444">
            <img src="https://img.shields.io/pypi/v/ens-normalize?style=flat&color=444444" alt="PyPI Version" width="auto" height="17">
          </picture>
        </a>
      </td>
    </tr>
    <tr>
      <td>
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/badge/py-444444?logo=python&logoColor=white">
          <img src="https://img.shields.io/badge/py-444444?logo=python&logoColor=white" alt="Python" width="auto" height="17">
        </picture>
      </td>
      <td>
        <a href="https://github.com/namehash/ens-font-data">ens-font-data</a>
      </td>
      <td>Metadata for graphemes that may appear in ENS names.</td>
      <td>
        -
      </td>
    </tr>
    <tr>
      <td>
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/badge/py-444444?logo=python&logoColor=white">
          <img src="https://img.shields.io/badge/py-444444?logo=python&logoColor=white" alt="Python" width="auto" height="17">
        </picture>
      </td>
      <td>
        <a href="https://github.com/namehash/ens-label-inspector">ens-label-inspector</a>
      </td>
      <td>Detailed inspection of labels in ENS names.</td>
      <td>
        <a href="https://pypi.org/project/ens-label-inspector/">
          <picture>
            <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/pypi/v/ens-label-inspector?style=flat&color=444444">
            <img src="https://img.shields.io/pypi/v/ens-label-inspector?style=flat&color=444444" alt="PyPI Version" width="auto" height="17">
          </picture>
        </a>
      </td>
    </tr>
    <tr>
      <td>
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/badge/py-444444?logo=python&logoColor=white">
          <img src="https://img.shields.io/badge/py-444444?logo=python&logoColor=white" alt="Python" width="auto" height="17">
        </picture>
      </td>
      <td>
        <a href="api">nameguard</a>
      </td>
      <td>Identify and prevent malicious use of ENS names.</td>
      <td>
        <a href="https://pypi.org/project/nameguard/">
          <picture>
            <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/pypi/v/nameguard?style=flat&color=444444">
            <img src="https://img.shields.io/pypi/v/nameguard?style=flat&color=444444" alt="PyPI Version" width="auto" height="17">
          </picture>
        </a>
      </td>
    </tr>
  </tbody>
</table>

### Apps

<table>
  <thead>
    <tr>
      <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<!-- adding spaces to stop language images from getting smashed --></th>
      <th align="left">Source Code</th>
      <th align="left">Summary</th>
      <th align="left">✨ Try it out! ✨</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/badge/next.js-444444?logo=next.js&logoColor=white">
          <img src="https://img.shields.io/badge/next.js-444444?logo=next.js&logoColor=white" alt="Next.js" width="auto" height="17">
        </picture>
      </td>
      <td>
        <a href="apps/nameguard.io/">nameguard.io</a>
      </td>
      <td>Official website for NameGuard.</td>
      <td>
        <a href="https://nameguard.io">Preview</a>
      </td>
    </tr>
    <tr>
      <td>
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/badge/next.js-444444?logo=next.js&logoColor=white">
          <img src="https://img.shields.io/badge/next.js-444444?logo=next.js&logoColor=white" alt="Next.js" width="auto" height="17">
        </picture>
      </td>
      <td>
        <a href="apps/examples.nameguard.io/">examples.nameguard.io</a>
      </td>
      <td>Examples for using nameguard-sdk, nameguard-js, and nameguard-react.</td>
      <td>
        <a href="https://examples.nameguard.io">Preview</a>
      </td>
    </tr>
    <tr>
      <td>
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/badge/tsx-444444?logo=storybook&logoColor=white">
          <img src="https://img.shields.io/badge/tsx-444444?logo=storybook&logoColor=white" alt="Storybook" width="auto" height="17">
        </picture>
      </td>
      <td>
        <a href="apps/storybook.namekit.io/">storybook.namekit.io</a>
      </td>
      <td>Explore UI components included in namekit-react, nameguard-react, and ens-webfont.</td>
      <td>
        <a href="https://storybook.namekit.io">Preview</a>
      </td>
    </tr>
    <tr>
      <td>
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/badge/mdx-444444?logo=mintlify&logoColor=white">
          <img src="https://img.shields.io/badge/mdx-444444?logo=mintlify&logoColor=white" alt="Mintlify" width="auto" height="17">
        </picture>
      </td>
      <td>
        <a href="apps/docs.nameguard.io/">docs.nameguard.io</a>
      </td>
      <td>Documentation for all NameGuard packages.</td>
      <td>
        <a href="https://docs.nameguard.io">Preview</a>
      </td>
    </tr>
    <tr>
      <td>
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/badge/next.js-444444?logo=next.js&logoColor=white">
          <img src="https://img.shields.io/badge/next.js-444444?logo=next.js&logoColor=white" alt="Next.js" width="auto" height="17">
        </picture>
      </td>
      <td>
        <a href="apps/namehashlabs.org/">namehashlabs.org</a>
      </td>
      <td>Official website for NameHash Labs.</td>
      <td>
        <a href="https://namehashlabs.org">Preview</a>
      </td>
    </tr>
  </tbody>
</table>

## Local Development

You must clone this respository, and install the dependencies using [PNPM](https://pnpm.io/installation) before you can run it locally:

1. `git clone https://github.com/namehash/namekit.git`
2. `cd namekit`
3. `pnpm i`
4. `pnpm dev`

It's recommended you run `pnpm dev` in the root of the repository to start all apps, packages, and internal resources to support local development.

## Testing

Tests are automatically ran when a new Pull Request is opened. You can run them locally using `pnpm test`.

If you're developing locally, you can watch changes and run tests automatically using `pnpm test:watch`.

## Continuous Deployment

We use [changesets](https://github.com/changesets/changesets) to manage our releases.

1. Run `pnpm changeset`
2. Choose the packages you want to release
3. Add a summary of the changes
4. Commit the file
5. Open a Pull Request
6. Once the PR is merged, a new or existing `Version Packages` PR will open.
7. Merge the `Version Packages` PR when you're ready to release a new version (of all packages) to NPM, or wait to merge in other changesets first.

## Storybook

We use [Storybook](https://storybook.namekit.io/) to preview components across our core packages:

- `@namehash/namekit-react`
- `@namehash/nameguard-react`
- `@namehash/ens-webfont`
- `@namehash/ui`
  - These components are mostly internal and not intended for public use, but they are used across our packages.
