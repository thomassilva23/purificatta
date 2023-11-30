import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  return (
    <>
      <div className="container header">
        <div className="row">
          <div className="col-4 left">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="67"
              height="67"
              viewBox="0 0 67 67"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M42.6667 20.1709C42.3069 21.1052 42.8354 21.879 43.8411 21.892C46.9085 21.9315 50.6969 25.421 50.7007 28.2105C50.7027 29.5951 51.8138 30.8254 52.6155 30.3313C53.4403 29.8231 53.1908 26.8022 52.1576 24.7827C51.0793 22.6754 48.8629 20.842 46.3999 20.0195C44.1859 19.2804 42.9906 19.3291 42.6667 20.1709ZM41.5333 24.9939C40.7602 25.9229 41.2166 26.5602 42.922 26.9339C44.6128 27.3041 45.723 28.4583 45.9444 30.0772C46.0566 30.8958 46.4579 31.3316 47.1972 31.4367C48.1444 31.5708 48.2851 31.376 48.2851 29.9345C48.2851 27.9096 46.7664 25.8621 44.593 24.9567C42.5893 24.1217 42.2562 24.1261 41.5333 24.9939ZM20.0556 29.2378C19.3946 30.1023 17.5205 33.1554 15.8911 36.0225C12.2536 42.4239 12.317 42.612 18.1245 42.612H22.1753V45.0562C22.1753 47.3149 22.258 47.4885 23.2632 47.3462C24.1897 47.2146 24.3729 46.8555 24.4977 44.9265C24.6103 43.1808 24.8598 42.5922 25.5856 42.3627C26.8577 41.9601 26.8369 40.2014 25.5599 40.2014C24.6509 40.2014 24.5929 39.8799 24.5929 34.8664C24.5929 31.9323 24.3676 29.112 24.0925 28.5991C23.3082 27.1383 21.4351 27.4348 20.0556 29.2378ZM32.4921 30.2975C27.1937 33.5373 27.2203 41.6805 32.539 44.7882C36.2122 46.9345 41.1214 46.1063 43.155 42.9967C44.2482 41.3252 44.9522 37.7104 44.33 36.9631C43.6419 36.1363 38.2894 36.1228 38.0012 36.9472C37.5753 38.1645 38.2662 38.7551 40.1171 38.7551C41.7001 38.7551 41.9994 38.9142 41.9994 39.7564C41.9994 40.307 41.3636 41.3917 40.5861 42.167C39.4755 43.2744 38.7405 43.5762 37.1551 43.5762C33.3934 43.5762 30.8786 41.0605 30.8786 37.2982C30.8786 35.5814 31.1692 34.9773 32.7556 33.395C34.8221 31.335 36.7929 30.9787 39.9097 32.1025C41.1629 32.5543 41.644 32.5528 42.101 32.0972C42.5598 31.6397 42.4573 31.2839 41.6281 30.4571C40.8148 29.6457 39.8662 29.3622 37.5371 29.2335C34.958 29.0913 34.2042 29.2504 32.4921 30.2975ZM22.1753 35.3804V40.2014H19.516C17.9441 40.2014 16.8567 39.9898 16.8567 39.6841C16.8567 39.1818 21.7489 30.5593 22.0337 30.5593C22.1115 30.5593 22.1753 32.7288 22.1753 35.3804Z"
                fill="#9E9E9E"
              />
              <path
                d="M61.037 49.1739C63.6561 44.5727 65.1522 39.2491 65.1522 33.5761C65.1522 16.1371 51.0151 2 33.5761 2C16.1371 2 2 16.1371 2 33.5761C2 51.0151 16.1371 65.1522 33.5761 65.1522C37.8909 65.1522 42.0036 64.2867 45.75 62.7199M58.1884 53.3587C56.8599 55.0095 55.3687 56.5238 53.7391 57.8774"
                stroke="#9E9E9E"
                stroke-width="3"
                stroke-linecap="round"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="67"
              height="67"
              viewBox="0 0 67 67"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M29.9839 21.4948C25.0279 22.3241 20.4002 24.6179 17.4145 27.7246C16.27 28.9164 16.092 29.371 16.5108 30.0344C17.3893 31.4258 18.4221 31.2377 21.1148 29.196C28.6102 23.5129 38.5406 23.4242 45.9602 28.9742C49.19 31.3901 50.6919 31.5762 50.923 29.5889C51.3049 26.2981 39.7886 20.6878 33.3685 21.0373C32.8366 21.0667 31.3136 21.2721 29.9839 21.4948ZM29.1247 28.8648C25.8644 29.7798 21.5224 32.847 21.5224 34.235C21.5224 34.8333 21.8555 35.5984 22.2622 35.9349C22.8791 36.4454 23.3597 36.2917 25.1454 35.0126C28.2495 32.7901 30.3078 32.066 33.5227 32.066C37.0476 32.066 39.0077 32.7072 41.932 34.8164C43.8303 36.1856 44.3738 36.3717 45.1957 35.933C48.782 34.0195 41.3876 28.7399 34.6227 28.3841C32.869 28.2921 30.3949 28.5085 29.1247 28.8648ZM29.9839 36.5992C27.0702 37.8816 26.0317 40.2218 27.8651 41.3731C28.4483 41.739 29.0106 41.6069 30.0704 40.8538C32.5209 39.1144 33.8288 39.0488 36.7454 40.5202C38.926 41.6204 39.5111 41.7448 40.1227 41.2385C43.5581 38.3956 34.9012 34.4346 29.9839 36.5992ZM32.7399 43.733C31.2802 45.1884 32.7627 47.4972 34.5463 46.5456C36.0883 45.7231 35.5622 43.1544 33.852 43.1544C33.5595 43.1544 33.059 43.4148 32.7399 43.733Z"
                fill="#9E9E9E"
              />
              <path
                d="M60.8847 49.1739C63.5038 44.5727 64.9998 39.2491 64.9998 33.5761C64.9998 16.1371 50.8627 2 33.4237 2C15.9848 2 1.84766 16.1371 1.84766 33.5761C1.84766 51.0151 15.9848 65.1522 33.4237 65.1522C37.7386 65.1522 41.8512 64.2867 45.5977 62.7199M58.0361 53.3587C56.7076 55.0095 55.2163 56.5238 53.5868 57.8774"
                stroke="#9E9E9E"
                stroke-width="3"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <div className="col-8 right">
            <p className="text">
              Garrafas reutilizadas: <strong>107</strong>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
