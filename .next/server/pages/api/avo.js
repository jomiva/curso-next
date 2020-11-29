module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/avo/index.js");
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

/***/ "./pages/api/avo/index.js":
/*!********************************!*\
  !*** ./pages/api/avo/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _database_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../database/db */ "./database/db.js");


const allAvos = async (req, res) => {
  const db = new _database_db__WEBPACK_IMPORTED_MODULE_0__["default"]();
  const allEntries = await db.getAll();
  const length = allEntries.length;
  res.statusCode = 200;
  res.setHeader('Content-type', 'application/json');
  res.end(JSON.stringify({
    data: allEntries,
    length
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (allAvos);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGF0YWJhc2UvZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9kYXRhYmFzZS9kYi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYXZvL2luZGV4LmpzIl0sIm5hbWVzIjpbImRhdGEiLCJuYW1lIiwiaWQiLCJza3UiLCJwcmljZSIsImltYWdlIiwiYXR0cmlidXRlcyIsImRlc2NyaXB0aW9uIiwic2hhcGUiLCJoYXJkaW5lc3MiLCJ0YXN0ZSIsImI4dXRoZTJ5IiwiZXd4c2Q2eGIiLCJmcHI3Mm05ayIsInQ5ZHYyNWdzIiwidDM0NXc0OHkiLCJEYXRhYmFzZSIsImNvbnN0cnVjdG9yIiwiZ2V0QWxsIiwiYXNBcnJheSIsIk9iamVjdCIsInZhbHVlcyIsImFsbERhdGEiLCJyYW5kb21EZWxheSIsImdldEJ5SWQiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJlbnRyeSIsIlByb21pc2UiLCJyZXNvbHZlIiwibWF4IiwibWluIiwiZGVsYXkiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJzZXRUaW1lb3V0IiwiYWxsQXZvcyIsInJlcSIsInJlcyIsImRiIiwiYWxsRW50cmllcyIsImxlbmd0aCIsInN0YXR1c0NvZGUiLCJzZXRIZWFkZXIiLCJlbmQiLCJKU09OIiwic3RyaW5naWZ5Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMx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YWdlcy9hcGkvYXZvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9hcGkvYXZvL2luZGV4LmpzXCIpO1xuIiwiY29uc3QgZGF0YSA9IHtcclxuICAnMnpkMzNiOGMnOiB7XHJcbiAgICBuYW1lOiAnTWFsdW1hIEhhc3MgQXZvY2FkbycsXHJcbiAgICBpZDogJzJ6ZDMzYjhjJyxcclxuICAgIHNrdTogJ05VUjcyS0NNJyxcclxuICAgIHByaWNlOiAxLjE1LFxyXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL21hbHVtYS5qcGcnLFxyXG4gICAgYXR0cmlidXRlczoge1xyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAnQSByZWxhdGl2ZWx5IG5ldyBjdWx0aXZhciwgaXQgd2FzLCB0aGUgcHJldHR5IGJveSBiYWJ5LCBkaXNjb3ZlcmVkIGluIFNvdXRoIEFmcmljYSBpbiB0aGUgZWFybHkgMTk5MHMgYnkgTXIuIEEuRy4gKERyaWVzKSBKb3ViZXJ0LiBNYWx1bWEgQmFieXkuIEl0IGlzIGEgY2hhbmNlIHNlZWRsaW5nIG9mIHVua25vd24gcGFyZW50YWdlJyxcclxuICAgICAgc2hhcGU6ICdPdmFsJyxcclxuICAgICAgaGFyZGluZXNzOiAnMSDCsEMnLFxyXG4gICAgICB0YXN0ZTogJ0NhdGNoeSwgaXMgYW4gYXZvY2FkbycsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgJzZ0cmZna2tqJzoge1xyXG4gICAgbmFtZTogJ0Z1ZXJ0ZSBBdm9jYWRvJyxcclxuICAgIGlkOiAnNnRyZmdra2onLFxyXG4gICAgc2t1OiAnQVg0TThTSlYnLFxyXG4gICAgcHJpY2U6IDEuMjEsXHJcbiAgICBpbWFnZTogJy9pbWFnZXMvZnVlcnRlLmpwZycsXHJcbiAgICBhdHRyaWJ1dGVzOiB7XHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICdUaGUgRnVlcnRlIGF2b2NhZG8gaXMgdGhlIHNlY29uZCBsYXJnZXN0IGNvbW1lcmNpYWwgdmFyaWV0eSBiZWhpbmQgSGFzcy4gSXQgaXMgYSBsb25nIHRpbWUgQ2FsaWZvcm5pYSBjb21tZXJjaWFsIHZhcmlldHkgdmFsdWVkIGZvciBpdHMgd2ludGVyIHNlYXNvbiByaXBlbmluZyBhbmQgaXRzIEItVHlwZSBibG9zc29tIHR5cGUgd2hpY2ggbW9zdCBncm93ZXJzIHBsYW50IGFkamFjZW50IHRvIHRoZSBIYXNzIGZvciBhIG1vcmUgY29uc2lzdGVudCBwcm9kdWN0aW9uIGN5Y2xlLiBUaGlzIGF2b2NhZG8gdGVuZHMgdG8gcHJvZHVjZSBoZWF2aWx5IGluIGFsdGVybmF0ZSB5ZWFycy4nLFxyXG4gICAgICBzaGFwZTogJ1BlYXInLFxyXG4gICAgICBoYXJkaW5lc3M6ICctMSDCsEMnLFxyXG4gICAgICB0YXN0ZTogJ01hZ25pZmljZW50LCBpcyBhIHN0cm9uZyBhdm9jYWRvJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICAnN2JjcjQ5ZW0nOiB7XHJcbiAgICBuYW1lOiAnR3dlbiBIYXNzIEF2b2NhZG8nLFxyXG4gICAgaWQ6ICc3YmNyNDllbScsXHJcbiAgICBza3U6ICdIWUE3OEY2SicsXHJcbiAgICBwcmljZTogMS4yNSxcclxuICAgIGltYWdlOiAnL2ltYWdlcy9nd2VuLmpwZycsXHJcbiAgICBhdHRyaWJ1dGVzOiB7XHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgIFwiQSBzZWVkbGluZyBicmVkIGZyb20gJ0hhc3MnIHggJ1RoaWxsZScgaW4gMTk4MiwgJ0d3ZW4nIGlzIGhpZ2hlciB5aWVsZGluZyBhbmQgbW9yZSBkd2FyZmluZyB0aGFuICdIYXNzJyBpbiBDYWxpZm9ybmlhLiBUaGUgZnJ1aXQgaGFzIGFuIG92YWwgc2hhcGUsIHNsaWdodGx5IHNtYWxsZXIgdGhhbiAnSGFzcycgKDEwMOKAkzIwMCBnIG9yIDMuNeKAkzcuMSBveiksIHdpdGggYSByaWNoLCBudXR0eSBmbGF2b3IuIFRoZSBza2luIHRleHR1cmUgaXMgbW9yZSBmaW5lbHkgcGViYmxlZCB0aGFuICdIYXNzJywgYW5kIGlzIGR1bGwgZ3JlZW4gd2hlbiByaXBlLiBJdCBpcyBmcm9zdC1oYXJkeSBkb3duIHRvIOKIkjEgwrBDICgzMCDCsEYpXCIsXHJcbiAgICAgIHNoYXBlOiAnUGx1bXAnLFxyXG4gICAgICBoYXJkaW5lc3M6ICfiiJIxIMKwQycsXHJcbiAgICAgIHRhc3RlOiAnU3VwZXJiLCBpcyBhbiBhdm9jYWRvJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICAnMDk4MzIza3MnOiB7XHJcbiAgICBuYW1lOiAnQmFjb24gQXZvY2FkbycsXHJcbiAgICBpZDogJzA5ODMyM2tzJyxcclxuICAgIHNrdTogJ0JYRDEwMEJMSycsXHJcbiAgICBwcmljZTogMS41MSxcclxuICAgIGltYWdlOiAnL2ltYWdlcy9iYWNvbi5qcGcnLFxyXG4gICAgYXR0cmlidXRlczoge1xyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAnRGV2ZWxvcGVkIGJ5IGEgZmFybWVyLCBKYW1lcyBCYWNvbiwgaW4gMTk1NCwgQmFjb24gaGFzIG1lZGl1bS1zaXplZCBmcnVpdCB3aXRoIHNtb290aCwgZ3JlZW4gc2tpbiB3aXRoIHllbGxvdy1ncmVlbiwgbGlnaHQtdGFzdGluZyBmbGVzaC4gV2hlbiByaXBlLCB0aGUgc2tpbiByZW1haW5zIGdyZWVuLCBidXQgZGFya2VucyBzbGlnaHRseSwgYW5kIGZydWl0IHlpZWxkcyB0byBnZW50bGUgcHJlc3N1cmUuIEl0IGlzIGNvbGQtaGFyZHkgZG93biB0byDiiJI1IMKwQyAoMjMgwrBGKScsXHJcbiAgICAgIHNoYXBlOiAnT3ZhbCcsXHJcbiAgICAgIGhhcmRpbmVzczogJ+KIkjUgwrBDJyxcclxuICAgICAgdGFzdGU6ICdDcmVhbXksIGlzIGFuIGF2b2NhZG8nLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGI4dXRoZTJ5OiB7XHJcbiAgICBuYW1lOiAnSGFzcyBBdm9jYWRvJyxcclxuICAgIGlkOiAnYjh1dGhlMnknLFxyXG4gICAgc2t1OiAnUk1SQ1pON0UnLFxyXG4gICAgcHJpY2U6IDEuMzksXHJcbiAgICBpbWFnZTogJy9pbWFnZXMvaGFzcy5qcGcnLFxyXG4gICAgYXR0cmlidXRlczoge1xyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICBcIlRoZSAnSGFzcycgaXMgdGhlIG1vc3QgY29tbW9uIGN1bHRpdmFyIG9mIGF2b2NhZG8uIEl0IHByb2R1Y2VzIGZydWl0IHllYXItcm91bmQgYW5kIGFjY291bnRzIGZvciA4MCUgb2YgY3VsdGl2YXRlZCBhdm9jYWRvcyBpbiB0aGUgd29ybGQuWzIxXVs1NV0gQWxsICdIYXNzJyB0cmVlcyBhcmUgZGVzY2VuZGVkIGZyb20gYSBzaW5nbGUgJ21vdGhlciB0cmVlJyByYWlzZWQgYnkgYSBtYWlsIGNhcnJpZXIgbmFtZWQgUnVkb2xwaCBIYXNzLCBvZiBMYSBIYWJyYSBIZWlnaHRzLCBDYWxpZm9ybmlhLlsyMF1bNTVdIEhhc3MgcGF0ZW50ZWQgdGhlIHByb2R1Y3RpdmUgdHJlZSBpbiAxOTM1LiBUaGUgJ21vdGhlciB0cmVlJywgb2YgdW5jZXJ0YWluIHN1YnNwZWNpZXMsIGRpZWQgb2Ygcm9vdCByb3QgYW5kIHdhcyBjdXQgZG93biBpbiBTZXB0ZW1iZXIgMjAwMi5bMjFdWzU1XVs1Nl0gJ0hhc3MnIHRyZWVzIGhhdmUgbWVkaXVtLXNpemVkICgxNTDigJMyNTAgZyBvciA1LjPigJM4Ljggb3opLCBvdmF0ZSBmcnVpdCB3aXRoIGEgYmxhY2ssIHBlYmJsZWQgc2tpbi4gVGhlIGZsZXNoIGhhcyBhIG51dHR5LCByaWNoIGZsYXZvciB3aXRoIDE5JSBvaWwuIEEgaHlicmlkIEd1YXRlbWFsYW4gdHlwZSBjYW4gd2l0aHN0YW5kIHRlbXBlcmF0dXJlcyB0byDiiJIxIMKwQyAoMzAgwrBGKVwiLFxyXG4gICAgICBzaGFwZTogJ092YWwnLFxyXG4gICAgICBoYXJkaW5lc3M6ICfiiJIxIMKwQycsXHJcbiAgICAgIHRhc3RlOiAnR29yZ2VvdXMsIGlzIGFuIGF2b2NhZG8nLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGV3eHNkNnhiOiB7XHJcbiAgICBuYW1lOiAnTGFtYiBIYXNzIEF2b2NhZG8nLFxyXG4gICAgaWQ6ICdld3hzZDZ4YicsXHJcbiAgICBza3U6ICdONTUyMjlaQScsXHJcbiAgICBwcmljZTogMS4zNCxcclxuICAgIGltYWdlOiAnL2ltYWdlcy9sYW1iLmpwZycsXHJcbiAgICBhdHRyaWJ1dGVzOiB7XHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICdUaGUgTGFtYiBIYXNzIGF2b2NhZG8gaXMgYSBjcm9zcyBiZXR3ZWVuIGEgSGFzcyBhbmQgR3dlbiBhdm9jYWRvLiBUaGUgZnJ1aXRzIGFyZSBsYXJnZXIgaW4gc2l6ZSBhbmQgbGF0ZXIgbWF0dXJpbmcgdGhhbiBIYXNzLiBJdCBpcyBnYWluaW5nIGluIHBvcHVsYXJpdHkgYXMgYSBjb21tZXJjaWFsIGFuZCBiYWNreWFyZCB2YXJpZXR5IGR1ZSB0byBpdHMgZXhjZXB0aW9uYWwgZmxhdm9yIGFuZCBlYXN5IHBlZWxpbmcgcXVhbGl0aWVzLiBUaGUgdHJlZSBoYXMgYW4gdXByaWdodCwgY29tcGFjdCBoYWJpdC4nLFxyXG4gICAgICBzaGFwZTogJ09ib3ZhdGUnLFxyXG4gICAgICBoYXJkaW5lc3M6ICctMiDCsEMnLFxyXG4gICAgICB0YXN0ZTogJ0dyZWF0LCBpcyBhbiBhdm9jYWRvJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBmcHI3Mm05azoge1xyXG4gICAgbmFtZTogJ1BpbmtlcnRvbiBBdm9jYWRvJyxcclxuICAgIGlkOiAnZnByNzJtOWsnLFxyXG4gICAgc2t1OiAnQjRIWjQyVE0nLFxyXG4gICAgcHJpY2U6IDEuMjcsXHJcbiAgICBpbWFnZTogJy9pbWFnZXMvcGlua2VydG9uLmpwZycsXHJcbiAgICBhdHRyaWJ1dGVzOiB7XHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgIFwiRmlyc3QgZ3Jvd24gb24gdGhlIFBpbmtlcnRvbiBSYW5jaCBpbiBTYXRpY295LCBDYWxpZm9ybmlhLCBpbiB0aGUgZWFybHkgMTk3MHMsICdQaW5rZXJ0b24nIGlzIGEgc2VlZGxpbmcgb2YgJ0hhc3MnIHggJ1JpbmNvbicuIFRoZSBsYXJnZSBmcnVpdCBoYXMgYSBzbWFsbCBzZWVkLCBhbmQgaXRzIGdyZWVuIHNraW4gZGVlcGVucyBpbiBjb2xvciBhcyBpdCByaXBlbnMuIFRoZSB0aGljayBmbGVzaCBoYXMgYSBzbW9vdGgsIGNyZWFteSB0ZXh0dXJlLCBwYWxlIGdyZWVuIGNvbG9yLCBnb29kIGZsYXZvciwgYW5kIGhpZ2ggb2lsIGNvbnRlbnQuIEl0IHNob3dzIHNvbWUgY29sZCB0b2xlcmFuY2UsIHRvIOKIkjEgwrBDICgzMCDCsEYpIGFuZCBiZWFycyBjb25zaXN0ZW50bHkgaGVhdnkgY3JvcHMuIEEgaHlicmlkIEd1YXRlbWFsYW4gdHlwZSwgaXQgaGFzIGV4Y2VsbGVudCBwZWVsaW5nIGNoYXJhY3RlcmlzdGljc1wiLFxyXG4gICAgICBzaGFwZTogJ0xvbmcgcGVhcicsXHJcbiAgICAgIGhhcmRpbmVzczogJ+KIkjEgwrBDJyxcclxuICAgICAgdGFzdGU6ICdNYXJ2ZWxvdXMsIGlzIGFuIGF2b2NhZG8nLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHQ5ZHYyNWdzOiB7XHJcbiAgICBuYW1lOiAnUmVlZCBBdm9jYWRvJyxcclxuICAgIGlkOiAndDlkdjI1Z3MnLFxyXG4gICAgc2t1OiAnWlkzVDlYWEMnLFxyXG4gICAgcHJpY2U6IDEuMTgsXHJcbiAgICBpbWFnZTogJy9pbWFnZXMvcmVlZC5qcGcnLFxyXG4gICAgYXR0cmlidXRlczoge1xyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAnRGV2ZWxvcGVkIGZyb20gYSBjaGFuY2Ugc2VlZGxpbmcgZm91bmQgaW4gMTk0OCBieSBKYW1lcyBTLiBSZWVkIGluIENhbGlmb3JuaWEsIHRoaXMgY3VsdGl2YXIgaGFzIGxhcmdlLCByb3VuZCwgZ3JlZW4gZnJ1aXQgd2l0aCBhIHNtb290aCB0ZXh0dXJlIGFuZCBkYXJrLCB0aGljaywgZ2xvc3N5IHNraW4uIFNtb290aCBhbmQgZGVsaWNhdGUsIHRoZSBmbGVzaCBoYXMgYSBzbGlnaHRseSBudXR0eSBmbGF2b3IuIFRoZSBza2luIHJpcGVucyBncmVlbi4gQSBHdWF0ZW1hbGFuIHR5cGUsIGl0IGlzIGhhcmR5IHRvIOKIkjEgwrBDICgzMCDCsEYpLiBUcmVlIHNpemUgaXMgYWJvdXQgNSBieSA0IG0gKDE2LjQgYnkgMTMuMSBmdCknLFxyXG4gICAgICBzaGFwZTogJ1JvdW5kJyxcclxuICAgICAgaGFyZGluZXNzOiAn4oiSMSDCsEMnLFxyXG4gICAgICB0YXN0ZTogJ0V4cXVpc2l0ZSwgaXMgYW4gYXZvY2FkbycsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgdDM0NXc0OHk6IHtcclxuICAgIG5hbWU6ICdadXRhbm8gQXZvY2FkbycsXHJcbiAgICBpZDogJ3QzNDV3NDh5JyxcclxuICAgIHNrdTogJ01XNzlaWjZZJyxcclxuICAgIHByaWNlOiAxLjI1LFxyXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL3p1dGFuby5qcGcnLFxyXG4gICAgYXR0cmlidXRlczoge1xyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAnVGhlIFp1dGFubyBhdm9jYWRvIGlzIGEgY29sZCBoYXJkeSwgY29uc2lzdGVudCBwcm9kdWNpbmcgYXZvY2FkbyB2YXJpZXR5LiBJdCByZXNlbWJsZXMgdGhlIEZ1ZXJ0ZSBpbiBhcHBlYXJhbmNlIGJ1dCBpcyBsZXNzIGZsYXZvcmZ1bCBidXQgbW9yZSBjb2xkIGhhcmR5LiBUaGUgZ3JlZW4gZnJ1aXRzIGFyZSBvYm92YXRlIGluIHNoYXBlIHdpdGggd2F4eSBidW1wcyBvbiB0aGUgc2tpbi4gVGhlIGZsZXNoIGhhcyBhIGxvdyBvaWwgYnV0IGhpZ2ggd2F0ZXIgY29udGVudCB3aGljaCBjYXVzZXMgaXQgdG8gaGF2ZSBhIG1vcmUgZmlicm91cyB0ZXh0dXJlLicsXHJcbiAgICAgIHNoYXBlOiAnUGVhcicsXHJcbiAgICAgIGhhcmRpbmVzczogJy01IMKwQycsXHJcbiAgICAgIHRhc3RlOiAnU3BsZW5kaWQsIGlzIGFuIGF2b2NhZG8nLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGF0YTtcclxuIiwiLy8gT2ggeW91IGN1cmlvdXMuLi5cclxuLy8gVGhpcyBpcyBub3QgYSByZWFsIGRhdGFiYXNlLFxyXG4vLyBCdXQgbGV0J3MgaW1hZ2luZSBpdCBpcyBvbmUgOilcclxuaW1wb3J0IGFsbERhdGEgZnJvbSAnLi9kYXRhJztcclxuXHJcbmNsYXNzIERhdGFiYXNlIHtcclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIGFzeW5jIGdldEFsbCgpIHtcclxuICAgIGNvbnN0IGFzQXJyYXkgPSBPYmplY3QudmFsdWVzKGFsbERhdGEpO1xyXG4gICAgYXdhaXQgcmFuZG9tRGVsYXkoKTtcclxuICAgIHJldHVybiBhc0FycmF5O1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZ2V0QnlJZChpZCkge1xyXG4gICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYWxsRGF0YSwgaWQpKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGVudHJ5ID0gYWxsRGF0YVtpZF07XHJcbiAgICBhd2FpdCByYW5kb21EZWxheSgpO1xyXG4gICAgcmV0dXJuIGVudHJ5O1xyXG4gIH1cclxufVxyXG5cclxuLy8gTGV0J3MgYWxzbyBhZGQgYSBkZWxheSB0byBtYWtlIGl0IGEgYml0IGNsb3NlciB0byByZWFsaXR5XHJcbmNvbnN0IHJhbmRvbURlbGF5ID0gKCkgPT5cclxuICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgY29uc3QgbWF4ID0gMzUwO1xyXG4gICAgY29uc3QgbWluID0gMTAwO1xyXG4gICAgY29uc3QgZGVsYXkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xyXG5cclxuICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgZGVsYXkpO1xyXG4gIH0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGF0YWJhc2U7XHJcbiIsImltcG9ydCBEYXRhYmFzZSBmcm9tICcuLi8uLi8uLi9kYXRhYmFzZS9kYic7XHJcblxyXG5jb25zdCBhbGxBdm9zID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgY29uc3QgZGIgPSBuZXcgRGF0YWJhc2UoKTtcclxuICBjb25zdCBhbGxFbnRyaWVzID0gYXdhaXQgZGIuZ2V0QWxsKCk7XHJcbiAgY29uc3QgbGVuZ3RoID0gYWxsRW50cmllcy5sZW5ndGg7XHJcbiAgcmVzLnN0YXR1c0NvZGUgPSAyMDA7XHJcbiAgcmVzLnNldEhlYWRlcignQ29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcclxuICByZXMuZW5kKEpTT04uc3RyaW5naWZ5KHsgZGF0YTogYWxsRW50cmllcywgbGVuZ3RoIH0pKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFsbEF2b3M7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=