let viewModel;
let eventSource;
$(document).ready(function () {
  viewModel = new ViewModel();
  ko.applyBindings(viewModel);
  $.get("/viewData", function (viewData) {
    console.log(`viewData=${JSON.stringify(viewData, null, 2)}`);
    viewModel.initialize(viewData);
    // console.log(12, viewData.locationId);
    // console.log(13, viewData.installedAppId);
    // console.log(111, viewData.devices);
    console.log("Opening SSE connection");
    eventSource = new EventSource("/events");
    eventSource.onmessage = function (event) {
      const data = JSON.parse(event.data);
      // 전체 기기 리스트
      if (data.event.locationId == viewData.locationId) {
        console.log(99, data);
        viewModel.updateDevice(data.deviceId, data.switchState);
      }
      if (data.deviceId) {
        viewModel.updateDevice(data.deviceId, data.switchState);
      }
    };
    eventSource.onerror = function (error) {
      console.log("EventSource failed %j", error);
    };
  });
});
