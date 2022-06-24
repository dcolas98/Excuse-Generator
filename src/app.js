/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
  let randomNumber = Math.random() * 10;
  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let pronoun = ["A", "The", "It"];
  let subject = ["Tall Guy", "Short Girl", "Chicken", "Poop", "Toilet"];
  let action = ["Peed on my", "fought my", "ran through my", "yelled at my"];
  let possion = ["homework", "car", "nintendo wii", "watermelon"];
  let where = ["in my room", "next to the garbage can", "in the white house"];

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let subjectIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let possionIndex = Math.floor(Math.random() * possion.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return (
    pronoun[pronounIndex] +
    " " +
    subject[subjectIndex] +
    " " +
    action[actionIndex] +
    " " +
    possion[possionIndex] +
    " " +
    where[whereIndex]
  );
};
