import {loadHeader, loadProjects, loadAbout, loadContact, loadLastImage} from "./load.js"
import { updateAnimations, elementsToAnimate } from "./animate.js";

let elements;

const init = () => {
    let url = "https://raw.githubusercontent.com/Jstaria/JWP/refs/heads/main/JWP.json";
    fetchData(url, loadData);

    update();
}

const update = () => {
    requestAnimationFrame(update);

    updateAnimations(elements);
}

const loadData = (data) => {
    loadHeader(data);
    loadProjects(data);
    loadAbout(data);
    loadContact(data);
    loadLastImage(data);
}

const fetchData = (url, callback) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    
    xhr.onload = () => {
        if (xhr.status === 200) {
            try {
                const responseData = JSON.parse(xhr.responseText);
                callback(responseData);

                elements = elementsToAnimate();

            } catch (error) {
                console.error('Error parsing JSON:', error);
            }
        } else {
            console.error('Failed to load data');
        }
    };
    
    xhr.onerror = () => console.error('XHR request error');
    xhr.send();
};

init();