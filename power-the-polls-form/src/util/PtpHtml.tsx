import { Fragment, FunctionalComponent, h, VNode } from "@stencil/core";

import { PtpLink } from "../util";

const toJsx = (node: Node): VNode => {
    const { nodeName, textContent } = node;

    if (nodeName === "#text") {
        return <Fragment>{textContent}</Fragment>;
    }
    if (nodeName === "P") {
        return <p>{nodeListToJSX(node)}</p>;
    }
    if (nodeName === "DIV") {
        return <div>{nodeListToJSX(node)}</div>;
    }
    if (nodeName === "A" && node instanceof HTMLAnchorElement) {
        const { href } = node;
        if (href.match(/workelections.org\/jurisdiction/gi)) {
            return (
                <PtpLink
                    path={
                        href
                            .replace(
                                /https\:\/\/workelections.org\/jurisdiction/gi,
                                "/jurisdiction",
                            ) // link to power the polls
                            .replace("jurisdiction//", "jurisdiction/") // sometimes WE has bad links : (
                    }
                >
                    {textContent}
                </PtpLink>
            );
        } else {
            return (
                <a target="_blank" href={href}>
                    {textContent}
                </a>
            );
        }
    }
    return <Fragment></Fragment>;
};

const nodeListToJSX = (node: Node): VNode[] =>
    Array.from(node.childNodes).map((child) => toJsx(child));

/**
 * A dumb and dirty way to convert WordPress HTML and links to JSX to use directly in the site
 **/
const PtpHtml: FunctionalComponent<{
    html: string;
}> = ({ html }) => {
    const parser = new DOMParser();
    const { body } = parser.parseFromString(html, "text/html");

    return (
        <Fragment>{body instanceof Node ? nodeListToJSX(body) : ""}</Fragment>
    );
};

export default PtpHtml;
