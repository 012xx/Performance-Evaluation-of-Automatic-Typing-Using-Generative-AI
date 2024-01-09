interface EventObject {
  j_target: JQuery;
  target: string;
  storage: string;
  tag: string;
  pm: Record<string, any>;
}

function addEventElement(obj: EventObject): void {
  const j_obj = obj.j_target;

  j_obj.addClass("event-setting-element");
  j_obj.attr("data-event-target", obj.target);
  j_obj.attr("data-event-storage", obj.storage);
  j_obj.attr("data-event-tag", obj.tag);
  j_obj.attr("data-event-pm", JSON.stringify(obj.pm));
}
