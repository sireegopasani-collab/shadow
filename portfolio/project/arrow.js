<!DOCTYPE html>
<html >
<head>
    <title>Document</title>
</head>
<body><center>
    <div class="arrow">
   <span class="arrow " onclick="next()"> &lt</span>
   <img id="image" src="himalaya.jpg.jpeg" width="100px" height="200px">
   <span class="arrow" onclick="prev()"> &gt</span>
    </div>
    </center>
    <script>
        let pics=["fridge.jpg.jpeg","maggi.jpg.jpeg","vim.jpg.jpeg"];
        let i=0;
        function next() {
i=(i+1 )% pics.length;
document.getElementById("image").src=pics[i];
setInterval(next,10000)
        } 
        
        function prev(){
            i=(i-1+pics.length) % pics.length;
document.getElementById("image").src=pics[i];

        }
    </script>
</body>
</html>