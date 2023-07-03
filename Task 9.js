function simulateAsyncOperation(callback) {
  // Simulate an asynchronous operation using setTimeout
  setTimeout(function() {
      const result = "Async operation is complete!";
      callback(result);
  }, 2000); // Wait for 2 seconds (2000 milliseconds) before invoking the callback
}

function handleResult(result) {
  alert(result);
}
