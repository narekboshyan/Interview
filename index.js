const React = (function () {
  let state;
  function useState(initVal) {
    state = state || initVal;
    function setState(newVal) {
      state = newVal;
    }
    return [state, setState];
  }

  function render(component) {
    const a = component();
    a.render();
    return a;
  }
  return { useState, render };
})();

function wrapper() {
  let [num, setNum] = React.useState(1);

  return {
    render: () => {
      console.log(`Rendered with value ${num}`);
    },
    click: () => {
      setNum(num + 1);
    },
  };
}

let rendered = React.render(wrapper);

rendered.click();
rendered = React.render(wrapper);
rendered.click();
rendered = React.render(wrapper);
rendered.click();
