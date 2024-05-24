import { render, screen } from "@testing-library/react";
import md5 from "md5";
import Icon from ".";

describe("Icon component", () => {
    describe("When a icon is created", () => {
        it("with name twich it has this path hash value 327fbc38c8e878259c3ec35ef231517a", () => {
            render(<Icon name="twitch" />);
            expect(md5(screen.getByTestId("icon-twich").getAttribute("d"))).toEqual(
            "327fbc38c8e878259c3ec35ef231517a"
            );
        });
        // Implémentation des test sur les autres icônes
        it("with name facebbok it has this path hash value bbea4c9e40773b969fdb6e406059f853", () => {
            render(<Icon name="facebook" />);
            expect(
            md5(screen.getByTestId("icon-facebook").getAttribute("d"))
            ).toEqual("bbea4c9e40773b969fdb6e406059f853");
        });
        it("with name twitter it has this path hash value 82f5be4a5c07199cb75dacec50b90b2a", () => {
            render(<Icon name="twitter" />);
            expect(md5(screen.getByTestId("icon-twitter").getAttribute("d"))).toEqual(
            "82f5be4a5c07199cb75dacec50b90b2a");
        });
        it("with name youtube it has this path hash value 43342876c2fc40e5b2afe621443ff95b", () => {
            render(<Icon name="youtube" />);
            expect(md5(screen.getByTestId("icon-youtube").getAttribute("d"))).toEqual(
            "43342876c2fc40e5b2afe621443ff95b");
        });
    });
});

