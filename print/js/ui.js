jQuery(function() {
    $('.img-down').on('click', downImg);

    const captureDiv = document.querySelector('#pdfArea');

    function downImg() {
        html2canvas(captureDiv).then(canvas => {
           saveImg(canvas.toDataURL('image/png'), 'capture.png'); 
        });
    }

    let saveImg = (uri, filename) => {
        let link = document.createElement('a'); 
        document.body.appendChild(link);
        link.href = uri;
        link.download = filename;
        link.click();
        document.body.removeChild(link);
    };
    
    $('.pdf-down').on('click', savePDF);

    function savePDF() {
        html2canvas(captureDiv).then(function(canvas) {
            const imgData = canvas.toDataURL('image/png');
            const imgWidth = 210; // 이미지 가로 길이(mm) / A4 기준
            const pageHeight = imgWidth * 1.414;  // 출력 페이지 세로 길이 계산 A4 기준
            const imgHeight = (canvas.height * imgWidth / canvas.width) - 15;
            let heightLeft = imgHeight;
            const doc = new jsPDF('p', 'mm');
            let position = 0;

            // 첫 페이지 출력
            doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
            
            // 한 페이지 이상일 경우 루프 돌면서 출력
            while (heightLeft >= 20) {
                position = heightLeft - imgHeight;
                doc.addPage();
                doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }
            // 파일 저장
            doc.save('sample.pdf');
        });
    }
});