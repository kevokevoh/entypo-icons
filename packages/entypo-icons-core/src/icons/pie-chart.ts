var paths =
  '<path d="M11 .958v9.039C11 10.551 10.551 11 9.997 11H.958A9.1 9.1 0 1 0 11 .958zm-2 0A9.098 9.098 0 0 0 .958 9H9V.958z"></path>';
export default {
  icon: "pie-chart",
  paths: paths,
  getSvg: function() {
    var head = '<svg xmlns="http://www.w3.org/2000/svg"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</svg>";
    return head + paths + tail;
  },
  getSprite: function() {
    var head = '<svg xmlns="http://www.w3.org/2000/svg">';
    head += "<symbol";
    head += ' id="entypo-icon-pie-chart"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "pie-chart";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
