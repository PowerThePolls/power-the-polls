import {Component, h, Host} from "@stencil/core";

@Component({
    tag: "page-media",
    styleUrl: "page-media.scss",
    shadow: false,
})
export class PageMedia {


    public render() {
        filterSelection("all");
        function filterSelection(c) {
        let x, filterButtonIndex;
        x = document.getElementsByClassName("filterDiv");
        if (c === "all") { c = ""; }
        // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
        for (filterButtonIndex = 0; filterButtonIndex < x.length; filterButtonIndex++) {
            removeClass(x[filterButtonIndex], "show");
            if (x[filterButtonIndex].className.indexOf(c) > -1) { addClass(x[filterButtonIndex], "show"); }
        }
        }

        // Show filtered elements
        function addClass(element, name) {
          let filterButtonIndex, arr1, arr2;
          arr1 = element.className.split(" ");
          arr2 = name.split(" ");
          for (filterButtonIndex = 0; filterButtonIndex < arr2.length; filterButtonIndex++) {
            if (arr1.indexOf(arr2[filterButtonIndex]) === -1) {
              element.className += " " + arr2[filterButtonIndex];
            }
          }
        }

        // Hide elements that are not selected
        function removeClass(element, name) {
          let filterButtonIndex, arr1, arr2;
          arr1 = element.className.split(" ");
          arr2 = name.split(" ");
          for (filterButtonIndex = 0; filterButtonIndex < arr2.length; filterButtonIndex++) {
            while (arr1.indexOf(arr2[filterButtonIndex]) > -1) {
              arr1.splice(arr1.indexOf(arr2[filterButtonIndex]), 1);
            }
          }
          element.className = arr1.join(" ");
        }

        // Add active class to the current control button (highlight it)
        let btnContainer = document.getElementById("myBtnContainer");
        let btns = btnContainer.getElementsByClassName("btn");
        for (let filterButtonIndex = 0; filterButtonIndex < btns.length; filterButtonIndex++) {
          btns[filterButtonIndex].addEventListener("click", function() {
            let current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
          });
        }
        return (
            <Host>
                <h1>Press & Media</h1>
                <p>
                    Top languages include:
                </p>
                <ul>
                    <li>Spanish (37%)</li>
                    <li>French (3%)</li>
                    <li>Arabic (1.1%)</li>
                    <li>Haitian-Creole (1.1%)</li>
                    <li>ASL (1.0%)</li>
                    <li>Other languages (8.9%)</li>
                </ul>
                <div id="myBtnContainer">
                    <button class="btn active" onclick="filterSelection('all')"> Show all</button>
                    <button class="btn" onclick="filterSelection('cars')"> Cars</button>
                    <button class="btn" onclick="filterSelection('animals')"> Animals</button>
                    <button class="btn" onclick="filterSelection('fruits')"> Fruits</button>
                    <button class="btn" onclick="filterSelection('colors')"> Colors</button>
                </div>
            </Host>
        );
    }

}
