import React from "react";
import Select from "react-select";

const options = [
  { value: "react", label: "react" },
  { value: "C language", label: "C language" },
  { value: "C++", label: "C++" },
  { value: "Java", label: "Java" },
  { value: "Python", label: "Python" },
  { value: "JavaScript", label: "JavaScript" },
  { value: "Ruby", label: "Ruby" },
  { value: "Go", label: "Go" },
  { value: "Rust", label: "Rust" },
  { value: "Swift", label: "Swift" },
  { value: "Kotlin", label: "Kotlin" },
  { value: "TypeScript", label: "TypeScript" },
  { value: "PHP", label: "PHP" },
  { value: "Perl", label: "Perl" },
  { value: "R", label: "R" },
  { value: "Haskell", label: "Haskell" },
  { value: "Scala", label: "Scala" },
  { value: "Elixir", label: "Elixir" },
  { value: "Rust", label: "Rust" },
  { value: "Swift", label: "Swift" },
  { value: "Objective-C", label: "Objective-C" },
  { value: "Shell", label: "Shell" },
  { value: "SQL", label: "SQL" },
  { value: "HTML", label: "HTML" },
  { value: "CSS", label: "CSS" },
  { value: "Racket", label: "Racket" },
  { value: "Lua", label: "Lua" },
  { value: "MATLAB", label: "MATLAB" },
  { value: "Assembly", label: "Assembly" },
  { value: "Perl", label: "Perl" },
  { value: "Bash", label: "Bash" },
  { value: "jQuery", label: "jQuery" },
  { value: "React", label: "React" },
  { value: "AngularJS", label: "AngularJS" },
  { value: "Vue.js", label: "Vue.js" },
  { value: "Ember.js", label: "Ember.js" },
  { value: "Backbone.js", label: "Backbone.js" },
  { value: "Express.js", label: "Express.js" },
  { value: "Meteor.js", label: "Meteor.js" },
  { value: "D3.js", label: "D3.js" },
  { value: "Moment.js", label: "Moment.js" },
  { value: "Lodash", label: "Lodash" },
  { value: "Underscore.js", label: "Underscore.js" },
  { value: "Axios", label: "Axios" },
  { value: "Redux", label: "Redux" },
  { value: "Next.js", label: "Next.js" },
  { value: "Gatsby", label: "Gatsby" },
  { value: "Jest", label: "Jest" },
  { value: "Enzyme", label: "Enzyme" },
  { value: "Mocha", label: "Mocha" },
  { value: "Chai", label: "Chai" },
  { value: "Sinon.js", label: "Sinon.js" },
  { value: "Webpack", label: "Webpack" },
  { value: "Babel", label: "Babel" },
  { value: "Grunt", label: "Grunt" },
  { value: "Gulp", label: "Gulp" },
  { value: "Parcel", label: "Parcel" },
  { value: "Chart.js", label: "Chart.js" },
  { value: "Three.js", label: "Three.js" },
  { value: "Socket.IO", label: "Socket.IO" },
  { value: "GraphQL", label: "GraphQL" },
  { value: "Apollo Client", label: "Apollo Client" },
  { value: "Mysql-2", label: "Mysql-2" },
  { value: "MongoDB", label: "MongoDB" },
];

const Dropdown = ({ setSkillInput }) => (
  <Select
    options={options}
    isMulti={true}
    onChange={(data) => {
      const selectedOptions = data.map((opt) => opt.value);
      setSkillInput(selectedOptions);
    }}
  />
);

export default Dropdown;
