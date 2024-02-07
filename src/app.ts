/// <reference path="models/drag-drop.ts" />
/// <reference path="models/project.ts" />
/// <reference path="state/project-state.ts" />
/// <reference path="util/validation.ts" />
/// <reference path="decorators/autobind.ts" />
/// <reference path="component/base-component" />
/// <reference path="component/project-input" />
/// <reference path="component/project-item" />
/// <reference path="component/project-list" />


namespace App {

    new ProjectInput();
    new ProjectList('active');
    new ProjectList('finished');

}