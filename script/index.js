document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".hero");

    // 預先創建一個Image對象加載高解析度圖片
    const highResImage = new Image();
    highResImage.src = "./img/主城晚-屋頂.png"; // 高解析度圖片路徑

    highResImage.onload = () => {
        container.classList.add("loaded"); // 添加`loaded`類名
    };
});

//CopyIP
function copyIP() {
    var copyText = document.getElementById("serverIP").textContent;
    
    // 嘗試複製文字到剪貼簿
    navigator.clipboard.writeText(copyText).then(function() {
        // 建立提示訊息元素
        const tooltip = document.createElement('div');
        tooltip.textContent = "IP 已複製到剪貼簿: " + copyText;
        tooltip.style.position = 'fixed';
        tooltip.style.bottom = '10px';
        tooltip.style.right = '-300px'; // 初始位置
        tooltip.style.backgroundColor = '#4CAF50';
        tooltip.style.color = 'white';
        tooltip.style.padding = '10px';
        tooltip.style.borderRadius = '5px';
        tooltip.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.2)';
        tooltip.style.transition = 'right 300ms ease-in-out';
        tooltip.style.zIndex = '1000';

        document.body.appendChild(tooltip);

        // 觸發動畫
        setTimeout(() => tooltip.style.right = '10px', 50);

        // 3 秒後移除提示訊息
        setTimeout(() => {
            tooltip.style.right = '-300px'; // 移出螢幕
            setTimeout(() => tooltip.remove(), 300); // 確保動畫完成後移除
        }, 3000);
    }).catch(function(err) {
        console.error('複製失敗', err);
    });
}

/* 
function typeWriter(element, text, speed, next) {
    let i = 0;
    function typingEffect() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typingEffect, speed);
        } else {
            setTimeout(() => {
                eraseText(element, () => {
                    if (next) {
                        next();
                    }
                });
            }, 3000); // 等待3秒後開始刪除文字
        }
    }
    typingEffect();
}

function eraseText(element, callback) {
    let text = element.innerHTML;
    let i = text.length;
    function erasingEffect() {
        if (i > 0) {
            element.innerHTML = text.substring(0, i - 1);
            i--;
            setTimeout(erasingEffect, 50); // 每50毫秒刪除一個字元
        } else {
            callback(); // 刪除完成後回呼
        }
    }
    erasingEffect();
}

function startTyping() {
    const typingElement = document.getElementById('hero-welcomeMessage');
    const texts = ["這是打字效果範例。", "接下來顯示下一段文字。", "還可以繼續添加更多段落。"];
    
    function typeNext(index) {
        if (index < texts.length) {
            typeWriter(typingElement, texts[index], 100, () => {
                typeNext(index + 1); // 打完一段文字後，開始打下一段
            });
        } else {
            typeNext(0); // 所有文字完成後，回到第一段重新開始
        }
    }
    
    typeNext(0); // 開始打第一段文字
}

startTyping(); // 啟動打字效果
 */