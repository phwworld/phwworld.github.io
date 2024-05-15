window.onload = function() {
    let canvas = document.querySelector('.myCanvas');
    let ctx = canvas.getContext('2d');
    let image = new Image();
    let canvasWidth = window.innerWidth;
    let canvasHeight = window.innerHeight;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    // 이미지 로드 후 Canvas에 그리기
    image.onload = function() {
        ctx.drawImage(image, 0, 0, canvas.width, canvas.width);
    };
    image.src = 'parking_map.png'; // 이미지 경로 설정

    // 핀치 줌 이벤트를 처리하는 함수
    let lastDistance = 0;
    canvas.addEventListener('touchstart', function(e) {
        if (e.touches.length >= 2) {
            let dx = e.touches[0].clientX - e.touches[1].clientX;
            let dy = e.touches[0].clientY - e.touches[1].clientY;
            lastDistance = Math.sqrt(dx * dx + dy * dy);
        }
    });

    canvas.addEventListener('touchmove', function(e) {
        if (e.touches.length >= 2) {
            let dx = e.touches[0].clientX - e.touches[1].clientX;
            let dy = e.touches[0].clientY - e.touches[1].clientY;
            let newDistance = Math.sqrt(dx * dx + dy * dy);
            let delta = newDistance - lastDistance;
            let zoomFactor = 0.01;
            let zoom = 1 + delta * zoomFactor;
            ctx.scale(zoom, zoom);
            ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            lastDistance = newDistance;
        }
    });
};
