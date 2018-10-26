#### CFPB Open Source Project Template Instructions

1. Create a new project.
2. Copy these files into the new project.
3. Update the README, replacing the contents below as prescribed.
4. Add any libraries, assets, or hard dependencies whose source code will be included
   in the project's repository to the _Exceptions_ section in the [TERMS](TERMS.md).
  - If no exceptions are needed, remove that section from TERMS.
5. If working with an existing code base, answer the questions on the [open source checklist](opensource-checklist.md)
6. Delete these instructions and everything up to the _Project Title_ from the README.
7. Write some great software and tell people about it.

> Keep the README fresh! It's the first thing people see and will make the initial impression.

----

# Teacher Digital Platform

**Description**:  The Teacher Digital Platform (TDP) will be a new section within the existing cf.gov website to promote the CFPBs financial education building blocks research. It will offer teachers resources to assist them with instructing students in K-12 grades on financial education topics.

This platform contains work for three separate projects: Building blocks tool, Curriculum review tool, and Search interface.

## Building blocks tool

**Description**: [The journey to adult financial well-being](https://www.consumerfinance.gov/practitioner-resources/youth-financial-education/journey) - A single page that will take users on a journey from adult financial well-being, to financial capability in youth, to the building blocks, and ending on a call to action. The call to action will focus on telling educators how they can easily incorporate the building blocks in their classroom.

  - **Technology stack**: Jinja2 template, inline SVG images, CSS, and JS.

  - **Live site**: [The journey to adult financial well-being](https://www.consumerfinance.gov/practitioner-resources/youth-financial-education/journey)

  - **Dependencies**: [smoothscroll polyfill](https://github.com/iamdustan/smoothscroll), [animate on scroll](https://github.com/michalsnik/aos)

### Implementation details

  - **Jinja2**: A single template file is used ([bb-tool.html](https://github.com/cfpb/teachers-digital-platform/blob/master/teachers_digital_platform/jinja2/teachers_digital_platform/bb-tool.html)).

  - **CSS**: This page pulls in the platform’s global style sheet ([tdp.less](https://github.com/cfpb/teachers-digital-platform/blob/master/teachers_digital_platform/css/tdp.less)). The [tour molecule](https://github.com/cfpb/teachers-digital-platform/blob/master/teachers_digital_platform/css/organisms/tour.less) contains most of the styles specific to this page. This page also uses the styles from the [animate on scroll](https://github.com/michalsnik/aos) library.

  - **JS**: This page pulls in the platform’s global JavaScript file ([tdp.js](https://github.com/cfpb/teachers-digital-platform/blob/master/teachers_digital_platform/js/index.js)). The [scroll.js](https://github.com/cfpb/teachers-digital-platform/blob/master/teachers_digital_platform/js/scroll.js) module handles the smooth scrolling to the different tour stops and depends on the [smoothscroll polyfill](https://github.com/iamdustan/smoothscroll) to work in older browsers. This page also uses the script from the [animate on scroll](https://github.com/michalsnik/aos) library.

## Curriculum review tool

**Description**: The [Curriculum review tool](https://www.consumerfinance.gov//practitioner-resources/youth-financial-education/curriculum-review/tool/) is an interactive, online tool for educators to use in place of the [paper-based PDF](https://s3.amazonaws.com/files.consumerfinance.gov/f/201509_cfpb_youth-financialeducation-curriculum-review.pdf) that already exists on the cf.gov website.

Further documentation about the CR tool can be found in the [crtool directory](https://github.com/cfpb/teachers-digital-platform/tree/master/teachers_digital_platform/crtool).

## Search interface

**Description**: Put a meaningful, short, plain-language description of what
this project is trying to accomplish and why it matters.
Describe the problem(s) this project solves.
Describe how this software can improve the lives of its audience.

Other things to include:

  - **Technology stack**: Indicate the technological nature of the software, including primary programming language(s) and whether the software is intended as standalone or as a module in a framework or other ecosystem.
  - **Status**:  Alpha, Beta, 1.1, etc. It's OK to write a sentence, too. The goal is to let interested people know where this project is at. This is also a good place to link to the [CHANGELOG](CHANGELOG.md).
  - **Links to production or demo instances**
  - Describe what sets this apart from related-projects. Linking to another doc or page is OK if this can't be expressed in a sentence or two.


**Screenshot**: If the software has visual components, place a screenshot after the description; e.g.,

![](https://raw.githubusercontent.com/cfpb/open-source-project-template/master/screenshot.png)


## Dependencies

Describe any dependencies that must be installed for this software to work.
This includes programming languages, databases or other storage mechanisms, build tools, frameworks, and so forth.
If specific versions of other software are required, or known not to work, call that out.

## Installation

Detailed instructions on how to install, configure, and get the project running.
This should be frequently tested to ensure reliability. Alternatively, link to
a separate [INSTALL](INSTALL.md) document.

## Configuration

If the software is configurable, describe it in detail, either here or in other documentation to which you link.

## Usage

Show users how to use the software.
Be specific.
Use appropriate formatting when showing code snippets.

## How to test the software

If the software includes automated tests, detail how to run those tests.

## Known issues

Document any known significant shortcomings with the software.

## Getting help

Instruct users how to get help with this software; this might include links to an issue tracker, wiki, mailing list, etc.

**Example**

If you have questions, concerns, bug reports, etc, please file an issue in this repository's Issue Tracker.

## Getting involved

This section should detail why people should get involved and describe key areas you are
currently focusing on; e.g., trying to get feedback on features, fixing certain bugs, building
important pieces, etc.

General instructions on _how_ to contribute should be stated with a link to [CONTRIBUTING](CONTRIBUTING.md).


----

## Open source licensing info
1. [TERMS](TERMS.md)
2. [LICENSE](LICENSE)
3. [CFPB Source Code Policy](https://github.com/cfpb/source-code-policy/)


----

## Credits and references

1. Projects that inspired you
2. Related projects
3. Books, papers, talks, or other sources that have meaningful impact or influence on this project
