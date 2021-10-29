import { RouteComponentProps } from "@reach/router";
import { ComponentType } from "react";
import ReactLoadable, { LoadingComponentProps } from "react-loadable";

const Loadable = (
    path: string,
    loading?: ComponentType<LoadingComponentProps>
): ComponentType<RouteComponentProps> & ReactLoadable.LoadableComponent => {
    return ReactLoadable({
        loader: () => import(path),
        loading: loading ? loading : () => null,
    });
};

export default Loadable;
