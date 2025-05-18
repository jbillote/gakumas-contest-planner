import os
from PIL import Image

ICON_SIZE = 96

image_directory = "scripts/images/pcards"
for filename in os.listdir(image_directory):
    output_filename = f"public/pcards/{filename}"
    output_filename = output_filename.replace(".png", ".webp")
    file = os.path.join(image_directory, filename)
    if os.path.isfile(file) and file.endswith(".png"):
        image = Image.open(file)
        width, height = image.size
        image = image.resize((ICON_SIZE, int(height * ICON_SIZE / width)))
        image = image.convert("RGB")
        image.save(output_filename, "webp")
