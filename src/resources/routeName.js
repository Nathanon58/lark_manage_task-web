import { pathName } from ".";
import ManageCaseListScene from "../screens/ManageCaseListScene";
import NotfoundScene from "../screens/NotfoundScene";

export const RouteComponent = (path) => {
    switch (path) {
        case pathName.manageCaseList: return ManageCaseListScene;
        case '': return NotfoundScene;
    }
}