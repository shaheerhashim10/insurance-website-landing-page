import Image from 'next/image';
import React from 'react';

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="mt-20 flex">
      <div className="">
        <svg
          width="573"
          height="521"
          viewBox="0 0 573 521"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.61706 140.471V8.07381H38.9936C63.4603 8.07381 75.6936 21.2486 75.6936 47.5983V100.947C75.6936 127.297 63.4603 140.471 38.9936 140.471H3.61706ZM26.7309 118.019H36.2588C47.0806 118.019 52.5209 111.71 52.5797 99.0914V49.4539C52.5797 36.8976 47.1394 30.6195 36.2588 30.6195H26.7309V118.019Z"
            fill="white"
          />
          <path
            d="M77.8426 115.421C77.8426 98.0399 87.3117 87.4629 106.25 83.6898L126.982 79.7003V70.8861C126.982 62.4122 123.071 58.1752 115.248 58.1752C107.544 58.1752 103.691 62.8143 103.691 72.0923V74.8757L81.1068 73.2057V72.0923C81.1068 61.2061 84.2239 52.5775 90.4582 46.2066C96.7513 39.7738 105.426 36.5574 116.483 36.5574C126.952 36.5574 135.069 39.5264 140.832 45.4643C146.655 51.4023 149.566 60.0308 149.566 71.35V140.471H130.246L126.982 117.462C125.805 125.317 123.012 131.379 118.601 135.647C114.19 139.853 108.691 141.956 102.103 141.956C94.9869 141.956 89.1643 139.544 84.6356 134.719C80.107 129.833 77.8426 123.4 77.8426 115.421ZM100.427 110.039C100.427 113.07 101.368 115.483 103.25 117.276C105.132 119.07 107.632 119.967 110.749 119.967C115.454 119.967 119.306 118.359 122.306 115.142C125.305 111.864 126.864 107.627 126.982 102.431V95.2874L111.278 98.4419C104.044 99.8646 100.427 103.73 100.427 110.039Z"
            fill="white"
          />
          <path
            d="M155.509 140.471V37.8563H175.094L177.74 60.6803C178.799 52.0826 181.593 45.6499 186.121 41.382C190.65 37.1141 196.532 35.444 203.766 36.3718V59.5669C194.238 59.4432 187.533 61.9483 183.651 67.0821C179.828 72.1541 177.917 80.5972 177.917 92.4112V140.471H155.509Z"
            fill="white"
          />
          <path
            d="M260.876 132.4C254.877 138.77 246.438 141.956 235.557 141.956C224.735 141.956 216.413 138.709 210.59 132.214C204.768 125.658 201.857 116.379 201.857 104.38V73.9479C201.857 61.5153 204.885 52.1445 210.943 45.8354C217.001 39.5264 225.294 36.3718 235.822 36.3718C246.996 36.3718 255.465 39.6501 261.229 46.2066C267.052 52.7012 269.963 61.5153 269.963 72.649V79.7003L248.084 81.1848V71.5356C248.084 66.8347 246.996 63.2782 244.82 60.8659C242.644 58.4536 239.703 57.2474 235.998 57.2474C231.999 57.2474 228.911 58.5464 226.735 61.1442C224.559 63.7421 223.471 67.3914 223.471 72.0923V106.235C223.471 116.132 227.558 121.08 235.733 121.08C243.967 121.08 248.084 116.349 248.084 106.885V99.6481L269.963 98.0708V106.235C269.963 117.245 266.934 125.967 260.876 132.4Z"
            fill="white"
          />
          <path
            d="M267.348 176.006V155.316C270.701 156.43 273.847 156.986 276.788 156.986C284.022 156.986 288.521 153.832 290.286 147.523L291.962 141.77L265.937 37.8563H289.756L302.989 114.4L317.369 37.8563H340.483L312.87 150.585C310.576 160.852 306.754 168.089 301.401 172.295C296.049 176.563 289.168 178.697 280.758 178.697C275.406 178.697 270.936 177.8 267.348 176.006Z"
            fill="white"
          />
          <path
            d="M340.956 48.7116V0.46582H359.042V48.7116H340.956Z"
            fill="white"
          />
          <path
            d="M390.656 141.956C381.128 141.956 373.424 139.296 367.542 133.977C361.72 128.657 358.809 121.637 358.809 112.916V108.926L380.334 107.256V111.246C380.334 114.771 381.276 117.524 383.158 119.503C385.04 121.421 387.598 122.379 390.833 122.379C393.95 122.379 396.42 121.513 398.243 119.781C400.067 117.988 400.978 115.575 400.978 112.545C400.978 108.091 397.89 104.411 391.715 101.504L379.099 95.1018C365.866 88.3598 359.22 78.7725 359.161 66.3399C359.161 57.3711 362.073 50.1343 367.895 44.6293C373.777 39.1243 381.54 36.3718 391.186 36.3718C400.243 36.3718 407.507 39.0625 412.976 44.4437C418.446 49.825 421.181 56.8763 421.181 65.5977C421.181 67.0203 421.122 68.1646 421.004 69.0305L400.184 70.515V66.5255C400.184 59.4123 396.949 55.8867 390.48 55.9485C387.833 55.9485 385.687 56.7526 384.04 58.3608C382.393 59.9071 381.57 62.0102 381.57 64.6699C381.57 67.3296 382.54 69.5254 384.481 71.2573C386.422 72.9273 389.392 74.6592 393.391 76.453L403.625 81.3703C416.623 87.3083 423.122 97.2048 423.122 111.06C423.122 120.462 420.152 127.977 414.211 133.606C408.271 139.173 400.419 141.956 390.656 141.956Z"
            fill="white"
          />
          <path
            d="M13.4978 198.5C9.49845 198.5 6.23428 197.263 3.70528 194.789C1.23509 192.315 0 189.13 0 185.233C0 181.15 1.2645 177.841 3.7935 175.305C6.3225 172.769 9.55727 171.501 13.4978 171.501C17.3795 171.501 20.5849 172.738 23.1139 175.213C25.6429 177.687 26.9074 181.027 26.9074 185.233C26.9074 189.315 25.6429 192.562 23.1139 194.975C20.5849 197.325 17.3795 198.5 13.4978 198.5ZM2.1173 312.156V209.541H24.7019V312.156H2.1173Z"
            fill="white"
          />
          <path
            d="M31.3502 312.156V209.541H50.6706L53.5819 232.18C54.4053 224.572 56.9637 218.665 61.2571 214.459C65.5505 210.191 71.0202 208.057 77.6662 208.057C85.0179 208.057 90.5464 210.902 94.2517 216.593C98.0158 222.283 99.8978 230.077 99.8978 239.973V312.156H77.3133V244.52C77.3133 234.87 73.5198 230.046 65.9328 230.046C58.1105 230.046 54.0524 234.808 53.7583 244.334V312.156H31.3502Z"
            fill="white"
          />
          <path
            d="M133.983 313.641C124.455 313.641 116.75 310.981 110.869 305.662C105.046 300.342 102.135 293.322 102.135 284.601V280.611L123.661 278.941V282.931C123.661 286.456 124.602 289.209 126.484 291.188C128.366 293.105 130.925 294.064 134.159 294.064C137.276 294.064 139.747 293.198 141.57 291.466C143.393 289.673 144.305 287.26 144.305 284.23C144.305 279.776 141.217 276.096 135.042 273.189L122.426 266.787C109.193 260.045 102.547 250.457 102.488 238.025C102.488 229.056 105.399 221.819 111.222 216.314C117.103 210.809 124.867 208.057 134.512 208.057C143.57 208.057 150.833 210.747 156.303 216.129C161.772 221.51 164.507 228.561 164.507 237.283C164.507 238.705 164.449 239.85 164.331 240.716L143.511 242.2V238.21C143.511 231.097 140.276 227.572 133.806 227.633C131.16 227.633 129.013 228.438 127.366 230.046C125.72 231.592 124.896 233.695 124.896 236.355C124.896 239.015 125.867 241.21 127.807 242.942C129.748 244.612 132.718 246.344 136.718 248.138L146.951 253.055C159.949 258.993 166.448 268.89 166.448 282.745C166.448 292.147 163.478 299.662 157.538 305.291C151.598 310.857 143.746 313.641 133.983 313.641Z"
            fill="white"
          />
          <path
            d="M168.685 282.281V209.541H191.27V277.178C191.27 286.827 195.122 291.652 202.827 291.652C210.296 291.652 214.149 286.889 214.384 277.364V209.541H237.145V312.156H217.295L214.737 289.147C213.913 297.002 211.443 303.064 207.326 307.332C203.268 311.538 197.975 313.641 191.446 313.641C184.095 313.641 178.449 310.827 174.508 305.198C170.626 299.569 168.685 291.93 168.685 282.281Z"
            fill="white"
          />
          <path
            d="M243.087 312.156V209.541H262.673L265.319 232.365C266.378 223.768 269.171 217.335 273.7 213.067C278.229 208.799 284.11 207.129 291.344 208.057V231.252C281.816 231.128 275.112 233.633 271.23 238.767C267.407 243.839 265.496 252.282 265.496 264.096V312.156H243.087Z"
            fill="white"
          />
          <path
            d="M285.289 287.106C285.289 269.725 294.758 259.148 313.696 255.375L334.428 251.385V242.571C334.428 234.097 330.517 229.86 322.694 229.86C314.99 229.86 311.138 234.499 311.138 243.777V246.561L288.553 244.891V243.777C288.553 232.891 291.67 224.262 297.904 217.892C304.198 211.459 312.873 208.242 323.93 208.242C334.398 208.242 342.515 211.211 348.279 217.149C354.101 223.087 357.012 231.716 357.012 243.035V312.156H337.692L334.428 289.147C333.252 297.002 330.458 303.064 326.047 307.332C321.636 311.538 316.137 313.641 309.55 313.641C302.433 313.641 296.611 311.229 292.082 306.404C287.553 301.518 285.289 295.085 285.289 287.106ZM307.873 281.724C307.873 284.755 308.814 287.168 310.696 288.961C312.578 290.755 315.078 291.652 318.195 291.652C322.9 291.652 326.753 290.044 329.752 286.827C332.752 283.549 334.31 279.312 334.428 274.116V266.972L318.725 270.127C311.49 271.55 307.873 275.415 307.873 281.724Z"
            fill="white"
          />
          <path
            d="M362.955 312.156V209.541H382.275L385.187 232.18C386.01 224.572 388.568 218.665 392.862 214.459C397.155 210.191 402.625 208.057 409.271 208.057C416.623 208.057 422.151 210.902 425.857 216.593C429.621 222.283 431.503 230.077 431.503 239.973V312.156H408.918V244.52C408.918 234.87 405.125 230.046 397.538 230.046C389.715 230.046 385.657 234.808 385.363 244.334V312.156H362.955Z"
            fill="white"
          />
          <path
            d="M493.73 304.085C487.731 310.455 479.291 313.641 468.411 313.641C457.589 313.641 449.267 310.394 443.444 303.899C437.622 297.342 434.71 288.064 434.71 276.065V245.633C434.71 233.2 437.739 223.829 443.797 217.52C449.855 211.211 458.148 208.057 468.675 208.057C479.85 208.057 488.319 211.335 494.083 217.892C499.906 224.386 502.817 233.2 502.817 244.334V251.385L480.938 252.87V243.221C480.938 238.52 479.85 234.963 477.674 232.551C475.498 230.139 472.557 228.932 468.852 228.932C464.853 228.932 461.765 230.231 459.589 232.829C457.413 235.427 456.324 239.076 456.324 243.777V277.92C456.324 287.817 460.412 292.765 468.587 292.765C476.821 292.765 480.938 288.034 480.938 278.57V271.333L502.817 269.756V277.92C502.817 288.93 499.788 297.652 493.73 304.085Z"
            fill="white"
          />
          <path
            d="M538.666 313.641C528.08 313.641 519.787 310.455 513.788 304.085C507.848 297.714 504.878 289.116 504.878 278.292V243.406C504.878 232.272 507.936 223.613 514.053 217.428C520.228 211.18 528.315 208.057 538.313 208.057C549.253 208.057 557.751 211.304 563.809 217.799C569.926 224.232 572.984 232.767 572.984 243.406V266.323H526.315V278.106C526.315 288.003 530.432 292.951 538.666 292.951C546.959 292.951 551.106 288.064 551.106 278.292V275.508H572.984V278.941C572.984 289.951 569.867 298.487 563.633 304.548C557.457 310.61 549.135 313.641 538.666 313.641ZM526.315 249.251H551.106V243.406C551.106 233.757 546.959 228.932 538.666 228.932C534.667 228.932 531.609 230.231 529.491 232.829C527.374 235.427 526.315 238.953 526.315 243.406V249.251Z"
            fill="white"
          />
          <path
            d="M2.47019 520.675V381.226H22.0552L24.7019 403.865C25.5253 396.133 27.966 390.195 32.0242 386.051C36.0824 381.845 41.1698 379.742 47.2864 379.742C55.1087 379.742 61.0489 382.556 65.107 388.185C69.1652 393.813 71.1943 401.576 71.1943 411.473V453.595C71.1943 463.986 69.0182 471.873 64.6659 477.254C60.3137 482.635 54.5205 485.326 47.2864 485.326C41.2874 485.326 36.3176 483.347 32.3771 479.388C28.4954 475.367 25.9958 469.893 24.8783 462.966V520.675H2.47019ZM24.8783 448.863C24.9959 458.512 28.9071 463.337 36.6117 463.337C44.4339 463.337 48.3745 458.574 48.4333 449.049V416.019C48.4333 406.493 44.5516 401.731 36.7881 401.731C29.0835 401.731 25.1136 406.555 24.8783 416.204V448.863Z"
            fill="white"
          />
          <path
            d="M74.2256 483.841V381.226H93.8106L96.4572 404.05C97.5159 395.453 100.31 389.02 104.838 384.752C109.367 380.484 115.248 378.814 122.482 379.742V402.937C112.955 402.813 106.25 405.318 102.368 410.452C98.5451 415.524 96.6337 423.967 96.6337 435.781V483.841H74.2256Z"
            fill="white"
          />
          <path
            d="M120.573 449.791V415.277C120.573 404.019 123.396 395.298 129.043 389.113C134.689 382.865 143.07 379.742 154.185 379.742C164.772 379.742 173.065 382.711 179.064 388.649C185.122 394.587 188.151 403.401 188.151 415.091V449.977C188.151 461.234 185.269 469.955 179.505 476.141C173.8 482.264 165.36 485.326 154.185 485.326C143.717 485.326 135.483 482.357 129.484 476.419C123.543 470.419 120.573 461.543 120.573 449.791ZM142.187 449.791C142.187 459.316 146.187 464.079 154.185 464.079C162.243 464.079 166.272 459.378 166.272 449.977V415.091C166.272 405.689 162.302 400.988 154.362 400.988C146.304 400.988 142.246 405.751 142.187 415.277V449.791Z"
            fill="white"
          />
          <path
            d="M190.211 453.595V411.473C190.211 401.576 192.211 393.813 196.21 388.185C200.269 382.556 206.15 379.742 213.855 379.742C219.736 379.742 224.618 381.659 228.499 385.494C232.44 389.267 235.028 394.679 236.263 401.731V343.836H258.847V483.841H239.527L236.616 461.017C235.675 468.625 233.234 474.594 229.293 478.924C225.353 483.192 220.206 485.326 213.855 485.326C206.62 485.326 200.857 482.635 196.563 477.254C192.329 471.873 190.211 463.986 190.211 453.595ZM212.796 449.049C212.796 458.574 216.707 463.337 224.529 463.337C232.352 463.337 236.263 458.265 236.263 448.121V416.947C236.263 406.803 232.293 401.731 224.353 401.731C216.648 401.731 212.796 406.493 212.796 416.019V449.049Z"
            fill="white"
          />
          <path
            d="M263.202 453.966V381.226H285.786V448.863C285.786 458.512 289.639 463.337 297.343 463.337C304.813 463.337 308.665 458.574 308.9 449.049V381.226H331.661V483.841H311.812L309.253 460.832C308.43 468.687 305.96 474.749 301.843 479.017C297.784 483.223 292.491 485.326 285.963 485.326C278.611 485.326 272.965 482.512 269.024 476.883C265.143 471.254 263.202 463.615 263.202 453.966Z"
            fill="white"
          />
          <path
            d="M393.977 475.77C387.978 482.14 379.538 485.326 368.658 485.326C357.836 485.326 349.514 482.079 343.691 475.584C337.868 469.027 334.957 459.749 334.957 447.75V417.318C334.957 404.885 337.986 395.514 344.044 389.205C350.102 382.896 358.395 379.742 368.922 379.742C380.097 379.742 388.566 383.02 394.33 389.577C400.152 396.071 403.064 404.885 403.064 416.019V423.07L381.185 424.555V414.906C381.185 410.205 380.097 406.648 377.921 404.236C375.745 401.824 372.804 400.617 369.099 400.617C365.099 400.617 362.012 401.916 359.836 404.514C357.659 407.112 356.571 410.761 356.571 415.462V449.605C356.571 459.502 360.659 464.45 368.834 464.45C377.068 464.45 381.185 459.719 381.185 450.255V443.018L403.064 441.441V449.605C403.064 460.615 400.035 469.337 393.977 475.77Z"
            fill="white"
          />
          <path
            d="M439.884 485.326C430.003 485.326 423.063 482.512 419.064 476.883C415.064 471.254 413.064 463.492 413.064 453.595V401.916H399.214V381.226H413.064V351.444H435.649C435.649 359.423 434.296 365.794 431.591 370.557C428.885 375.257 424.533 378.814 418.534 381.226H452.852V401.916H435.649V449.791C435.649 455.11 436.472 458.853 438.119 461.017C439.766 463.182 442.56 464.265 446.5 464.265C449.029 464.265 451.205 463.955 453.029 463.337V483.47C449.206 484.707 444.824 485.326 439.884 485.326Z"
            fill="white"
          />
          <path
            d="M483.938 485.326C474.41 485.326 466.705 482.666 460.824 477.347C455.001 472.027 452.09 465.007 452.09 456.286V452.296L473.616 450.626V454.616C473.616 458.141 474.557 460.894 476.439 462.873C478.321 464.79 480.879 465.749 484.114 465.749C487.231 465.749 489.701 464.883 491.525 463.151C493.348 461.358 494.259 458.945 494.259 455.914C494.259 451.461 491.172 447.781 484.996 444.874L472.381 438.472C459.148 431.73 452.502 422.142 452.443 409.71C452.443 400.741 455.354 393.504 461.177 387.999C467.058 382.494 474.821 379.742 484.467 379.742C493.524 379.742 500.788 382.432 506.258 387.814C511.727 393.195 514.462 400.246 514.462 408.968C514.462 410.39 514.403 411.535 514.286 412.401L493.466 413.885V409.895C493.466 402.782 490.231 399.257 483.761 399.318C481.115 399.318 478.968 400.123 477.321 401.731C475.674 403.277 474.851 405.38 474.851 408.04C474.851 410.7 475.821 412.895 477.762 414.627C479.703 416.297 482.673 418.029 486.672 419.823L496.906 424.74C509.904 430.678 516.403 440.575 516.403 454.43C516.403 463.832 513.433 471.347 507.493 476.976C501.552 482.542 493.701 485.326 483.938 485.326Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="flex flex-col ml-28 mt-8">
        <svg
          width="41"
          height="41"
          viewBox="0 0 41 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className='animate-spin-slow'
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.5056 40.7081C31.6091 40.7279 40.6263 31.7428 40.6461 20.6393C40.666 9.53579 31.6808 0.518563 20.5773 0.498756C9.47383 0.478948 0.456599 9.46406 0.436791 20.5676C0.416984 31.6711 9.4021 40.6883 20.5056 40.7081ZM21.9571 18.8912L22.988 8.80122L18.0246 8.79237L19.0702 18.886L9.45212 16.0305L8.73442 20.8649L17.9509 21.6698L12.0103 29.9639L16.5136 32.4423L20.4299 23.251L24.7185 32.4569L29.0787 29.9943L23.0664 21.6789L32.387 20.9071L31.6865 16.0702L21.9571 18.8912Z"
            fill="#D9D9D9"
          />
        </svg>
        <p className="w-52 mt-3">
          Our plans are saving policyholders 30% - 60% on premiums
        </p>

        <svg
          width="41"
          height="41"
          viewBox="0 0 41 41"
          className="mt-12 animate-spin-slow"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.5056 40.7081C31.6091 40.7279 40.6263 31.7428 40.6461 20.6393C40.666 9.53579 31.6808 0.518563 20.5773 0.498756C9.47383 0.478948 0.456599 9.46406 0.436791 20.5676C0.416984 31.6711 9.4021 40.6883 20.5056 40.7081ZM21.9571 18.8912L22.988 8.80122L18.0246 8.79237L19.0702 18.886L9.45212 16.0305L8.73442 20.8649L17.9509 21.6698L12.0103 29.9639L16.5136 32.4423L20.4299 23.251L24.7185 32.4569L29.0787 29.9943L23.0664 21.6789L32.387 20.9071L31.6865 16.0702L21.9571 18.8912Z"
            fill="#D9D9D9"
          />
        </svg>
        <p className="w-52 mt-3">
          We offer a choice of low dedactibles and include no cost value-added
          services
        </p>
        <div className="hero-div-gradient mt-9 px-4 py-8">
          <svg
            width="19"
            height="63"
            viewBox="0 0 19 63"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.4553 54.4715L10.2584 61.6685C9.81674 62.1101 9.1007 62.1101 8.65906 61.6685L1.46212 54.4715C1.02048 54.0299 1.02048 53.3139 1.46212 52.8722C1.90376 52.4306 2.6198 52.4306 3.06144 52.8722L8.32783 58.1386V0.554682H10.5896V58.1386L15.856 52.8722C16.2976 52.4306 17.0137 52.4306 17.4553 52.8722C17.897 53.3139 17.897 54.0299 17.4553 54.4715Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.7219 52.6057C18.3107 53.1945 18.3107 54.1493 17.7219 54.7381L10.5249 61.935C9.93606 62.5239 8.98134 62.5239 8.39249 61.935L1.19555 54.7381C0.606693 54.1493 0.606693 53.1945 1.19555 52.6057C1.7844 52.0168 2.73912 52.0168 3.32797 52.6057L7.95085 57.2285V0.177734H10.9666V57.2285L15.5894 52.6057C16.1783 52.0168 17.133 52.0168 17.7219 52.6057ZM17.1887 54.205C17.4832 53.9106 17.4832 53.4332 17.1887 53.1388C16.8943 52.8444 16.417 52.8444 16.1225 53.1388L10.2126 59.0487V0.931661H8.70477V59.0487L2.79487 53.1388C2.50044 52.8444 2.02308 52.8444 1.72865 53.1388C1.43423 53.4332 1.43423 53.9106 1.72865 54.205L8.92559 61.4019C9.22002 61.6964 9.69738 61.6964 9.99181 61.4019L17.1887 54.205Z"
              fill="white"
            />
          </svg>
        </div>
      </div>

      <Image
        src="/ballon.jpeg"
        className="ml-6 rounded-[123px] hero-shadow"
        width={246}
        height={518}
        alt={''}
      />
    </div>
  );
};

export default Hero;
