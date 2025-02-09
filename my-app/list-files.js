const fs = require("fs")
const path = require("path")

function listFiles(dir, prefix = "") {
  const files = fs.readdirSync(dir)
  files.forEach((file, index) => {
    const filePath = path.join(dir, file)
    const stats = fs.statSync(filePath)
    const isLast = index === files.length - 1
    const marker = isLast ? "└── " : "├── "

    console.log(prefix + marker + file)

    if (stats.isDirectory()) {
      listFiles(filePath, prefix + (isLast ? "    " : "│   "))
    }
  })
}

console.log("Project Structure:")
listFiles(".")

