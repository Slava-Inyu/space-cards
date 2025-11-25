import type { SpaceItem } from "./types";

type XHRCallback = (error: Error | null, data?: SpaceItem[]) => void;

export function fetchSpaceCards(callback: XHRCallback): void {
  const xhr = new XMLHttpRequest();
  const url = "http://localhost:3001/spaceCards";

  xhr.open("GET", url, true);

  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      try {
        const data = JSON.parse(xhr.responseText) as SpaceItem[];
        callback(null, data);
      } catch {
        callback(new Error("Failed to parse JSON response"));
      }
    } else {
      callback(
        new Error(`Request failed with status ${xhr.status}: ${xhr.statusText}`)
      );
    }
  };

  xhr.onerror = function () {
    callback(new Error("Network error occurred"));
  };

  xhr.ontimeout = function () {
    callback(new Error("Request timed out"));
  };

  xhr.send();
}
