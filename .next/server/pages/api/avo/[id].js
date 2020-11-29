module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/avo/[id].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./database/data.js":
/*!**************************!*\
  !*** ./database/data.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const data = {
  '2zd33b8c': {
    name: 'Maluma Hass Avocado',
    id: '2zd33b8c',
    sku: 'NUR72KCM',
    price: 1.15,
    image: '/images/maluma.jpg',
    attributes: {
      description: 'A relatively new cultivar, it was, the pretty boy baby, discovered in South Africa in the early 1990s by Mr. A.G. (Dries) Joubert. Maluma Babyy. It is a chance seedling of unknown parentage',
      shape: 'Oval',
      hardiness: '1 °C',
      taste: 'Catchy, is an avocado'
    }
  },
  '6trfgkkj': {
    name: 'Fuerte Avocado',
    id: '6trfgkkj',
    sku: 'AX4M8SJV',
    price: 1.21,
    image: '/images/fuerte.jpg',
    attributes: {
      description: 'The Fuerte avocado is the second largest commercial variety behind Hass. It is a long time California commercial variety valued for its winter season ripening and its B-Type blossom type which most growers plant adjacent to the Hass for a more consistent production cycle. This avocado tends to produce heavily in alternate years.',
      shape: 'Pear',
      hardiness: '-1 °C',
      taste: 'Magnificent, is a strong avocado'
    }
  },
  '7bcr49em': {
    name: 'Gwen Hass Avocado',
    id: '7bcr49em',
    sku: 'HYA78F6J',
    price: 1.25,
    image: '/images/gwen.jpg',
    attributes: {
      description: "A seedling bred from 'Hass' x 'Thille' in 1982, 'Gwen' is higher yielding and more dwarfing than 'Hass' in California. The fruit has an oval shape, slightly smaller than 'Hass' (100–200 g or 3.5–7.1 oz), with a rich, nutty flavor. The skin texture is more finely pebbled than 'Hass', and is dull green when ripe. It is frost-hardy down to −1 °C (30 °F)",
      shape: 'Plump',
      hardiness: '−1 °C',
      taste: 'Superb, is an avocado'
    }
  },
  '098323ks': {
    name: 'Bacon Avocado',
    id: '098323ks',
    sku: 'BXD100BLK',
    price: 1.51,
    image: '/images/bacon.jpg',
    attributes: {
      description: 'Developed by a farmer, James Bacon, in 1954, Bacon has medium-sized fruit with smooth, green skin with yellow-green, light-tasting flesh. When ripe, the skin remains green, but darkens slightly, and fruit yields to gentle pressure. It is cold-hardy down to −5 °C (23 °F)',
      shape: 'Oval',
      hardiness: '−5 °C',
      taste: 'Creamy, is an avocado'
    }
  },
  b8uthe2y: {
    name: 'Hass Avocado',
    id: 'b8uthe2y',
    sku: 'RMRCZN7E',
    price: 1.39,
    image: '/images/hass.jpg',
    attributes: {
      description: "The 'Hass' is the most common cultivar of avocado. It produces fruit year-round and accounts for 80% of cultivated avocados in the world.[21][55] All 'Hass' trees are descended from a single 'mother tree' raised by a mail carrier named Rudolph Hass, of La Habra Heights, California.[20][55] Hass patented the productive tree in 1935. The 'mother tree', of uncertain subspecies, died of root rot and was cut down in September 2002.[21][55][56] 'Hass' trees have medium-sized (150–250 g or 5.3–8.8 oz), ovate fruit with a black, pebbled skin. The flesh has a nutty, rich flavor with 19% oil. A hybrid Guatemalan type can withstand temperatures to −1 °C (30 °F)",
      shape: 'Oval',
      hardiness: '−1 °C',
      taste: 'Gorgeous, is an avocado'
    }
  },
  ewxsd6xb: {
    name: 'Lamb Hass Avocado',
    id: 'ewxsd6xb',
    sku: 'N55229ZA',
    price: 1.34,
    image: '/images/lamb.jpg',
    attributes: {
      description: 'The Lamb Hass avocado is a cross between a Hass and Gwen avocado. The fruits are larger in size and later maturing than Hass. It is gaining in popularity as a commercial and backyard variety due to its exceptional flavor and easy peeling qualities. The tree has an upright, compact habit.',
      shape: 'Obovate',
      hardiness: '-2 °C',
      taste: 'Great, is an avocado'
    }
  },
  fpr72m9k: {
    name: 'Pinkerton Avocado',
    id: 'fpr72m9k',
    sku: 'B4HZ42TM',
    price: 1.27,
    image: '/images/pinkerton.jpg',
    attributes: {
      description: "First grown on the Pinkerton Ranch in Saticoy, California, in the early 1970s, 'Pinkerton' is a seedling of 'Hass' x 'Rincon'. The large fruit has a small seed, and its green skin deepens in color as it ripens. The thick flesh has a smooth, creamy texture, pale green color, good flavor, and high oil content. It shows some cold tolerance, to −1 °C (30 °F) and bears consistently heavy crops. A hybrid Guatemalan type, it has excellent peeling characteristics",
      shape: 'Long pear',
      hardiness: '−1 °C',
      taste: 'Marvelous, is an avocado'
    }
  },
  t9dv25gs: {
    name: 'Reed Avocado',
    id: 't9dv25gs',
    sku: 'ZY3T9XXC',
    price: 1.18,
    image: '/images/reed.jpg',
    attributes: {
      description: 'Developed from a chance seedling found in 1948 by James S. Reed in California, this cultivar has large, round, green fruit with a smooth texture and dark, thick, glossy skin. Smooth and delicate, the flesh has a slightly nutty flavor. The skin ripens green. A Guatemalan type, it is hardy to −1 °C (30 °F). Tree size is about 5 by 4 m (16.4 by 13.1 ft)',
      shape: 'Round',
      hardiness: '−1 °C',
      taste: 'Exquisite, is an avocado'
    }
  },
  t345w48y: {
    name: 'Zutano Avocado',
    id: 't345w48y',
    sku: 'MW79ZZ6Y',
    price: 1.25,
    image: '/images/zutano.jpg',
    attributes: {
      description: 'The Zutano avocado is a cold hardy, consistent producing avocado variety. It resembles the Fuerte in appearance but is less flavorful but more cold hardy. The green fruits are obovate in shape with waxy bumps on the skin. The flesh has a low oil but high water content which causes it to have a more fibrous texture.',
      shape: 'Pear',
      hardiness: '-5 °C',
      taste: 'Splendid, is an avocado'
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (data);

/***/ }),

/***/ "./database/db.js":
/*!************************!*\
  !*** ./database/db.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./database/data.js");
// Oh you curious...
// This is not a real database,
// But let's imagine it is one :)


class Database {
  constructor() {}

  async getAll() {
    const asArray = Object.values(_data__WEBPACK_IMPORTED_MODULE_0__["default"]);
    await randomDelay();
    return asArray;
  }

  async getById(id) {
    if (!Object.prototype.hasOwnProperty.call(_data__WEBPACK_IMPORTED_MODULE_0__["default"], id)) {
      return null;
    }

    const entry = _data__WEBPACK_IMPORTED_MODULE_0__["default"][id];
    await randomDelay();
    return entry;
  }

} // Let's also add a delay to make it a bit closer to reality


const randomDelay = () => new Promise(resolve => {
  const max = 350;
  const min = 100;
  const delay = Math.floor(Math.random() * (max - min + 1)) + min;
  setTimeout(resolve, delay);
});

/* harmony default export */ __webpack_exports__["default"] = (Database);

/***/ }),

/***/ "./pages/api/avo/[id].js":
/*!*******************************!*\
  !*** ./pages/api/avo/[id].js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _database_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../database/db */ "./database/db.js");


const Avocado = async (req, res) => {
  const db = new _database_db__WEBPACK_IMPORTED_MODULE_0__["default"]();
  const id = req.query.id;
  const data = await db.getById(id);
  res.status(200).json(data);
};

/* harmony default export */ __webpack_exports__["default"] = (Avocado);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGF0YWJhc2UvZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9kYXRhYmFzZS9kYi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYXZvLy5qcyJdLCJuYW1lcyI6WyJkYXRhIiwibmFtZSIsImlkIiwic2t1IiwicHJpY2UiLCJpbWFnZSIsImF0dHJpYnV0ZXMiLCJkZXNjcmlwdGlvbiIsInNoYXBlIiwiaGFyZGluZXNzIiwidGFzdGUiLCJiOHV0aGUyeSIsImV3eHNkNnhiIiwiZnByNzJtOWsiLCJ0OWR2MjVncyIsInQzNDV3NDh5IiwiRGF0YWJhc2UiLCJjb25zdHJ1Y3RvciIsImdldEFsbCIsImFzQXJyYXkiLCJPYmplY3QiLCJ2YWx1ZXMiLCJhbGxEYXRhIiwicmFuZG9tRGVsYXkiLCJnZXRCeUlkIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiZW50cnkiLCJQcm9taXNlIiwicmVzb2x2ZSIsIm1heCIsIm1pbiIsImRlbGF5IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwic2V0VGltZW91dCIsIkF2b2NhZG8iLCJyZXEiLCJyZXMiLCJkYiIsInF1ZXJ5Iiwic3RhdHVzIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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QUFMLEVBQXdEO0FBQ3RELGFBQU8sSUFBUDtBQUNEOztBQUVELFVBQU0wQixLQUFLLEdBQUdOLDZDQUFPLENBQUNwQixFQUFELENBQXJCO0FBQ0EsVUFBTXFCLFdBQVcsRUFBakI7QUFDQSxXQUFPSyxLQUFQO0FBQ0Q7O0FBakJZLEMsQ0FvQmY7OztBQUNBLE1BQU1MLFdBQVcsR0FBRyxNQUNsQixJQUFJTSxPQUFKLENBQWFDLE9BQUQsSUFBYTtBQUN2QixRQUFNQyxHQUFHLEdBQUcsR0FBWjtBQUNBLFFBQU1DLEdBQUcsR0FBRyxHQUFaO0FBQ0EsUUFBTUMsS0FBSyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLE1BQWlCTCxHQUFHLEdBQUdDLEdBQU4sR0FBWSxDQUE3QixDQUFYLElBQThDQSxHQUE1RDtBQUVBSyxZQUFVLENBQUNQLE9BQUQsRUFBVUcsS0FBVixDQUFWO0FBQ0QsQ0FORCxDQURGOztBQVNlakIsdUVBQWYsRTs7Ozs7Ozs7Ozs7O0FDbkNBO0FBQUE7QUFBQTs7QUFFQSxNQUFNc0IsT0FBTyxHQUFHLE9BQU9DLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUNsQyxRQUFNQyxFQUFFLEdBQUcsSUFBSXpCLG9EQUFKLEVBQVg7QUFDQSxRQUFNZCxFQUFFLEdBQUdxQyxHQUFHLENBQUNHLEtBQUosQ0FBVXhDLEVBQXJCO0FBQ0EsUUFBTUYsSUFBSSxHQUFHLE1BQU15QyxFQUFFLENBQUNqQixPQUFILENBQVd0QixFQUFYLENBQW5CO0FBQ0FzQyxLQUFHLENBQUNHLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjVDLElBQXJCO0FBQ0QsQ0FMRDs7QUFPZXNDLHNFQUFmLEUiLCJmaWxlIjoicGFnZXMvYXBpL2F2by9baWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9hcGkvYXZvL1tpZF0uanNcIik7XG4iLCJjb25zdCBkYXRhID0ge1xyXG4gICcyemQzM2I4Yyc6IHtcclxuICAgIG5hbWU6ICdNYWx1bWEgSGFzcyBBdm9jYWRvJyxcclxuICAgIGlkOiAnMnpkMzNiOGMnLFxyXG4gICAgc2t1OiAnTlVSNzJLQ00nLFxyXG4gICAgcHJpY2U6IDEuMTUsXHJcbiAgICBpbWFnZTogJy9pbWFnZXMvbWFsdW1hLmpwZycsXHJcbiAgICBhdHRyaWJ1dGVzOiB7XHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICdBIHJlbGF0aXZlbHkgbmV3IGN1bHRpdmFyLCBpdCB3YXMsIHRoZSBwcmV0dHkgYm95IGJhYnksIGRpc2NvdmVyZWQgaW4gU291dGggQWZyaWNhIGluIHRoZSBlYXJseSAxOTkwcyBieSBNci4gQS5HLiAoRHJpZXMpIEpvdWJlcnQuIE1hbHVtYSBCYWJ5eS4gSXQgaXMgYSBjaGFuY2Ugc2VlZGxpbmcgb2YgdW5rbm93biBwYXJlbnRhZ2UnLFxyXG4gICAgICBzaGFwZTogJ092YWwnLFxyXG4gICAgICBoYXJkaW5lc3M6ICcxIMKwQycsXHJcbiAgICAgIHRhc3RlOiAnQ2F0Y2h5LCBpcyBhbiBhdm9jYWRvJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICAnNnRyZmdra2onOiB7XHJcbiAgICBuYW1lOiAnRnVlcnRlIEF2b2NhZG8nLFxyXG4gICAgaWQ6ICc2dHJmZ2traicsXHJcbiAgICBza3U6ICdBWDRNOFNKVicsXHJcbiAgICBwcmljZTogMS4yMSxcclxuICAgIGltYWdlOiAnL2ltYWdlcy9mdWVydGUuanBnJyxcclxuICAgIGF0dHJpYnV0ZXM6IHtcclxuICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgJ1RoZSBGdWVydGUgYXZvY2FkbyBpcyB0aGUgc2Vjb25kIGxhcmdlc3QgY29tbWVyY2lhbCB2YXJpZXR5IGJlaGluZCBIYXNzLiBJdCBpcyBhIGxvbmcgdGltZSBDYWxpZm9ybmlhIGNvbW1lcmNpYWwgdmFyaWV0eSB2YWx1ZWQgZm9yIGl0cyB3aW50ZXIgc2Vhc29uIHJpcGVuaW5nIGFuZCBpdHMgQi1UeXBlIGJsb3Nzb20gdHlwZSB3aGljaCBtb3N0IGdyb3dlcnMgcGxhbnQgYWRqYWNlbnQgdG8gdGhlIEhhc3MgZm9yIGEgbW9yZSBjb25zaXN0ZW50IHByb2R1Y3Rpb24gY3ljbGUuIFRoaXMgYXZvY2FkbyB0ZW5kcyB0byBwcm9kdWNlIGhlYXZpbHkgaW4gYWx0ZXJuYXRlIHllYXJzLicsXHJcbiAgICAgIHNoYXBlOiAnUGVhcicsXHJcbiAgICAgIGhhcmRpbmVzczogJy0xIMKwQycsXHJcbiAgICAgIHRhc3RlOiAnTWFnbmlmaWNlbnQsIGlzIGEgc3Ryb25nIGF2b2NhZG8nLFxyXG4gICAgfSxcclxuICB9LFxyXG4gICc3YmNyNDllbSc6IHtcclxuICAgIG5hbWU6ICdHd2VuIEhhc3MgQXZvY2FkbycsXHJcbiAgICBpZDogJzdiY3I0OWVtJyxcclxuICAgIHNrdTogJ0hZQTc4RjZKJyxcclxuICAgIHByaWNlOiAxLjI1LFxyXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL2d3ZW4uanBnJyxcclxuICAgIGF0dHJpYnV0ZXM6IHtcclxuICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgXCJBIHNlZWRsaW5nIGJyZWQgZnJvbSAnSGFzcycgeCAnVGhpbGxlJyBpbiAxOTgyLCAnR3dlbicgaXMgaGlnaGVyIHlpZWxkaW5nIGFuZCBtb3JlIGR3YXJmaW5nIHRoYW4gJ0hhc3MnIGluIENhbGlmb3JuaWEuIFRoZSBmcnVpdCBoYXMgYW4gb3ZhbCBzaGFwZSwgc2xpZ2h0bHkgc21hbGxlciB0aGFuICdIYXNzJyAoMTAw4oCTMjAwIGcgb3IgMy414oCTNy4xIG96KSwgd2l0aCBhIHJpY2gsIG51dHR5IGZsYXZvci4gVGhlIHNraW4gdGV4dHVyZSBpcyBtb3JlIGZpbmVseSBwZWJibGVkIHRoYW4gJ0hhc3MnLCBhbmQgaXMgZHVsbCBncmVlbiB3aGVuIHJpcGUuIEl0IGlzIGZyb3N0LWhhcmR5IGRvd24gdG8g4oiSMSDCsEMgKDMwIMKwRilcIixcclxuICAgICAgc2hhcGU6ICdQbHVtcCcsXHJcbiAgICAgIGhhcmRpbmVzczogJ+KIkjEgwrBDJyxcclxuICAgICAgdGFzdGU6ICdTdXBlcmIsIGlzIGFuIGF2b2NhZG8nLFxyXG4gICAgfSxcclxuICB9LFxyXG4gICcwOTgzMjNrcyc6IHtcclxuICAgIG5hbWU6ICdCYWNvbiBBdm9jYWRvJyxcclxuICAgIGlkOiAnMDk4MzIza3MnLFxyXG4gICAgc2t1OiAnQlhEMTAwQkxLJyxcclxuICAgIHByaWNlOiAxLjUxLFxyXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL2JhY29uLmpwZycsXHJcbiAgICBhdHRyaWJ1dGVzOiB7XHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICdEZXZlbG9wZWQgYnkgYSBmYXJtZXIsIEphbWVzIEJhY29uLCBpbiAxOTU0LCBCYWNvbiBoYXMgbWVkaXVtLXNpemVkIGZydWl0IHdpdGggc21vb3RoLCBncmVlbiBza2luIHdpdGggeWVsbG93LWdyZWVuLCBsaWdodC10YXN0aW5nIGZsZXNoLiBXaGVuIHJpcGUsIHRoZSBza2luIHJlbWFpbnMgZ3JlZW4sIGJ1dCBkYXJrZW5zIHNsaWdodGx5LCBhbmQgZnJ1aXQgeWllbGRzIHRvIGdlbnRsZSBwcmVzc3VyZS4gSXQgaXMgY29sZC1oYXJkeSBkb3duIHRvIOKIkjUgwrBDICgyMyDCsEYpJyxcclxuICAgICAgc2hhcGU6ICdPdmFsJyxcclxuICAgICAgaGFyZGluZXNzOiAn4oiSNSDCsEMnLFxyXG4gICAgICB0YXN0ZTogJ0NyZWFteSwgaXMgYW4gYXZvY2FkbycsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgYjh1dGhlMnk6IHtcclxuICAgIG5hbWU6ICdIYXNzIEF2b2NhZG8nLFxyXG4gICAgaWQ6ICdiOHV0aGUyeScsXHJcbiAgICBza3U6ICdSTVJDWk43RScsXHJcbiAgICBwcmljZTogMS4zOSxcclxuICAgIGltYWdlOiAnL2ltYWdlcy9oYXNzLmpwZycsXHJcbiAgICBhdHRyaWJ1dGVzOiB7XHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgIFwiVGhlICdIYXNzJyBpcyB0aGUgbW9zdCBjb21tb24gY3VsdGl2YXIgb2YgYXZvY2Fkby4gSXQgcHJvZHVjZXMgZnJ1aXQgeWVhci1yb3VuZCBhbmQgYWNjb3VudHMgZm9yIDgwJSBvZiBjdWx0aXZhdGVkIGF2b2NhZG9zIGluIHRoZSB3b3JsZC5bMjFdWzU1XSBBbGwgJ0hhc3MnIHRyZWVzIGFyZSBkZXNjZW5kZWQgZnJvbSBhIHNpbmdsZSAnbW90aGVyIHRyZWUnIHJhaXNlZCBieSBhIG1haWwgY2FycmllciBuYW1lZCBSdWRvbHBoIEhhc3MsIG9mIExhIEhhYnJhIEhlaWdodHMsIENhbGlmb3JuaWEuWzIwXVs1NV0gSGFzcyBwYXRlbnRlZCB0aGUgcHJvZHVjdGl2ZSB0cmVlIGluIDE5MzUuIFRoZSAnbW90aGVyIHRyZWUnLCBvZiB1bmNlcnRhaW4gc3Vic3BlY2llcywgZGllZCBvZiByb290IHJvdCBhbmQgd2FzIGN1dCBkb3duIGluIFNlcHRlbWJlciAyMDAyLlsyMV1bNTVdWzU2XSAnSGFzcycgdHJlZXMgaGF2ZSBtZWRpdW0tc2l6ZWQgKDE1MOKAkzI1MCBnIG9yIDUuM+KAkzguOCBveiksIG92YXRlIGZydWl0IHdpdGggYSBibGFjaywgcGViYmxlZCBza2luLiBUaGUgZmxlc2ggaGFzIGEgbnV0dHksIHJpY2ggZmxhdm9yIHdpdGggMTklIG9pbC4gQSBoeWJyaWQgR3VhdGVtYWxhbiB0eXBlIGNhbiB3aXRoc3RhbmQgdGVtcGVyYXR1cmVzIHRvIOKIkjEgwrBDICgzMCDCsEYpXCIsXHJcbiAgICAgIHNoYXBlOiAnT3ZhbCcsXHJcbiAgICAgIGhhcmRpbmVzczogJ+KIkjEgwrBDJyxcclxuICAgICAgdGFzdGU6ICdHb3JnZW91cywgaXMgYW4gYXZvY2FkbycsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZXd4c2Q2eGI6IHtcclxuICAgIG5hbWU6ICdMYW1iIEhhc3MgQXZvY2FkbycsXHJcbiAgICBpZDogJ2V3eHNkNnhiJyxcclxuICAgIHNrdTogJ041NTIyOVpBJyxcclxuICAgIHByaWNlOiAxLjM0LFxyXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL2xhbWIuanBnJyxcclxuICAgIGF0dHJpYnV0ZXM6IHtcclxuICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgJ1RoZSBMYW1iIEhhc3MgYXZvY2FkbyBpcyBhIGNyb3NzIGJldHdlZW4gYSBIYXNzIGFuZCBHd2VuIGF2b2NhZG8uIFRoZSBmcnVpdHMgYXJlIGxhcmdlciBpbiBzaXplIGFuZCBsYXRlciBtYXR1cmluZyB0aGFuIEhhc3MuIEl0IGlzIGdhaW5pbmcgaW4gcG9wdWxhcml0eSBhcyBhIGNvbW1lcmNpYWwgYW5kIGJhY2t5YXJkIHZhcmlldHkgZHVlIHRvIGl0cyBleGNlcHRpb25hbCBmbGF2b3IgYW5kIGVhc3kgcGVlbGluZyBxdWFsaXRpZXMuIFRoZSB0cmVlIGhhcyBhbiB1cHJpZ2h0LCBjb21wYWN0IGhhYml0LicsXHJcbiAgICAgIHNoYXBlOiAnT2JvdmF0ZScsXHJcbiAgICAgIGhhcmRpbmVzczogJy0yIMKwQycsXHJcbiAgICAgIHRhc3RlOiAnR3JlYXQsIGlzIGFuIGF2b2NhZG8nLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGZwcjcybTlrOiB7XHJcbiAgICBuYW1lOiAnUGlua2VydG9uIEF2b2NhZG8nLFxyXG4gICAgaWQ6ICdmcHI3Mm05aycsXHJcbiAgICBza3U6ICdCNEhaNDJUTScsXHJcbiAgICBwcmljZTogMS4yNyxcclxuICAgIGltYWdlOiAnL2ltYWdlcy9waW5rZXJ0b24uanBnJyxcclxuICAgIGF0dHJpYnV0ZXM6IHtcclxuICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgXCJGaXJzdCBncm93biBvbiB0aGUgUGlua2VydG9uIFJhbmNoIGluIFNhdGljb3ksIENhbGlmb3JuaWEsIGluIHRoZSBlYXJseSAxOTcwcywgJ1BpbmtlcnRvbicgaXMgYSBzZWVkbGluZyBvZiAnSGFzcycgeCAnUmluY29uJy4gVGhlIGxhcmdlIGZydWl0IGhhcyBhIHNtYWxsIHNlZWQsIGFuZCBpdHMgZ3JlZW4gc2tpbiBkZWVwZW5zIGluIGNvbG9yIGFzIGl0IHJpcGVucy4gVGhlIHRoaWNrIGZsZXNoIGhhcyBhIHNtb290aCwgY3JlYW15IHRleHR1cmUsIHBhbGUgZ3JlZW4gY29sb3IsIGdvb2QgZmxhdm9yLCBhbmQgaGlnaCBvaWwgY29udGVudC4gSXQgc2hvd3Mgc29tZSBjb2xkIHRvbGVyYW5jZSwgdG8g4oiSMSDCsEMgKDMwIMKwRikgYW5kIGJlYXJzIGNvbnNpc3RlbnRseSBoZWF2eSBjcm9wcy4gQSBoeWJyaWQgR3VhdGVtYWxhbiB0eXBlLCBpdCBoYXMgZXhjZWxsZW50IHBlZWxpbmcgY2hhcmFjdGVyaXN0aWNzXCIsXHJcbiAgICAgIHNoYXBlOiAnTG9uZyBwZWFyJyxcclxuICAgICAgaGFyZGluZXNzOiAn4oiSMSDCsEMnLFxyXG4gICAgICB0YXN0ZTogJ01hcnZlbG91cywgaXMgYW4gYXZvY2FkbycsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgdDlkdjI1Z3M6IHtcclxuICAgIG5hbWU6ICdSZWVkIEF2b2NhZG8nLFxyXG4gICAgaWQ6ICd0OWR2MjVncycsXHJcbiAgICBza3U6ICdaWTNUOVhYQycsXHJcbiAgICBwcmljZTogMS4xOCxcclxuICAgIGltYWdlOiAnL2ltYWdlcy9yZWVkLmpwZycsXHJcbiAgICBhdHRyaWJ1dGVzOiB7XHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICdEZXZlbG9wZWQgZnJvbSBhIGNoYW5jZSBzZWVkbGluZyBmb3VuZCBpbiAxOTQ4IGJ5IEphbWVzIFMuIFJlZWQgaW4gQ2FsaWZvcm5pYSwgdGhpcyBjdWx0aXZhciBoYXMgbGFyZ2UsIHJvdW5kLCBncmVlbiBmcnVpdCB3aXRoIGEgc21vb3RoIHRleHR1cmUgYW5kIGRhcmssIHRoaWNrLCBnbG9zc3kgc2tpbi4gU21vb3RoIGFuZCBkZWxpY2F0ZSwgdGhlIGZsZXNoIGhhcyBhIHNsaWdodGx5IG51dHR5IGZsYXZvci4gVGhlIHNraW4gcmlwZW5zIGdyZWVuLiBBIEd1YXRlbWFsYW4gdHlwZSwgaXQgaXMgaGFyZHkgdG8g4oiSMSDCsEMgKDMwIMKwRikuIFRyZWUgc2l6ZSBpcyBhYm91dCA1IGJ5IDQgbSAoMTYuNCBieSAxMy4xIGZ0KScsXHJcbiAgICAgIHNoYXBlOiAnUm91bmQnLFxyXG4gICAgICBoYXJkaW5lc3M6ICfiiJIxIMKwQycsXHJcbiAgICAgIHRhc3RlOiAnRXhxdWlzaXRlLCBpcyBhbiBhdm9jYWRvJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICB0MzQ1dzQ4eToge1xyXG4gICAgbmFtZTogJ1p1dGFubyBBdm9jYWRvJyxcclxuICAgIGlkOiAndDM0NXc0OHknLFxyXG4gICAgc2t1OiAnTVc3OVpaNlknLFxyXG4gICAgcHJpY2U6IDEuMjUsXHJcbiAgICBpbWFnZTogJy9pbWFnZXMvenV0YW5vLmpwZycsXHJcbiAgICBhdHRyaWJ1dGVzOiB7XHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICdUaGUgWnV0YW5vIGF2b2NhZG8gaXMgYSBjb2xkIGhhcmR5LCBjb25zaXN0ZW50IHByb2R1Y2luZyBhdm9jYWRvIHZhcmlldHkuIEl0IHJlc2VtYmxlcyB0aGUgRnVlcnRlIGluIGFwcGVhcmFuY2UgYnV0IGlzIGxlc3MgZmxhdm9yZnVsIGJ1dCBtb3JlIGNvbGQgaGFyZHkuIFRoZSBncmVlbiBmcnVpdHMgYXJlIG9ib3ZhdGUgaW4gc2hhcGUgd2l0aCB3YXh5IGJ1bXBzIG9uIHRoZSBza2luLiBUaGUgZmxlc2ggaGFzIGEgbG93IG9pbCBidXQgaGlnaCB3YXRlciBjb250ZW50IHdoaWNoIGNhdXNlcyBpdCB0byBoYXZlIGEgbW9yZSBmaWJyb3VzIHRleHR1cmUuJyxcclxuICAgICAgc2hhcGU6ICdQZWFyJyxcclxuICAgICAgaGFyZGluZXNzOiAnLTUgwrBDJyxcclxuICAgICAgdGFzdGU6ICdTcGxlbmRpZCwgaXMgYW4gYXZvY2FkbycsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkYXRhO1xyXG4iLCIvLyBPaCB5b3UgY3VyaW91cy4uLlxyXG4vLyBUaGlzIGlzIG5vdCBhIHJlYWwgZGF0YWJhc2UsXHJcbi8vIEJ1dCBsZXQncyBpbWFnaW5lIGl0IGlzIG9uZSA6KVxyXG5pbXBvcnQgYWxsRGF0YSBmcm9tICcuL2RhdGEnO1xyXG5cclxuY2xhc3MgRGF0YWJhc2Uge1xyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgYXN5bmMgZ2V0QWxsKCkge1xyXG4gICAgY29uc3QgYXNBcnJheSA9IE9iamVjdC52YWx1ZXMoYWxsRGF0YSk7XHJcbiAgICBhd2FpdCByYW5kb21EZWxheSgpO1xyXG4gICAgcmV0dXJuIGFzQXJyYXk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBnZXRCeUlkKGlkKSB7XHJcbiAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhbGxEYXRhLCBpZCkpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZW50cnkgPSBhbGxEYXRhW2lkXTtcclxuICAgIGF3YWl0IHJhbmRvbURlbGF5KCk7XHJcbiAgICByZXR1cm4gZW50cnk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBMZXQncyBhbHNvIGFkZCBhIGRlbGF5IHRvIG1ha2UgaXQgYSBiaXQgY2xvc2VyIHRvIHJlYWxpdHlcclxuY29uc3QgcmFuZG9tRGVsYXkgPSAoKSA9PlxyXG4gIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICBjb25zdCBtYXggPSAzNTA7XHJcbiAgICBjb25zdCBtaW4gPSAxMDA7XHJcbiAgICBjb25zdCBkZWxheSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XHJcblxyXG4gICAgc2V0VGltZW91dChyZXNvbHZlLCBkZWxheSk7XHJcbiAgfSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRhYmFzZTtcclxuIiwiaW1wb3J0IERhdGFiYXNlIGZyb20gJy4uLy4uLy4uL2RhdGFiYXNlL2RiJztcclxuXHJcbmNvbnN0IEF2b2NhZG8gPSBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICBjb25zdCBkYiA9IG5ldyBEYXRhYmFzZSgpO1xyXG4gIGNvbnN0IGlkID0gcmVxLnF1ZXJ5LmlkO1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBkYi5nZXRCeUlkKGlkKTtcclxuICByZXMuc3RhdHVzKDIwMCkuanNvbihkYXRhKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF2b2NhZG87XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=