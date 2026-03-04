import os
import sys
import re
from datetime import datetime


def slugify(text):
    text = text.lower()
    text = re.sub(r'[^\w\s-]', '', text)
    text = re.sub(r'[-\s]+', '-', text).strip('-')
    return text if text else "untitled"


def create_post(title, folder="_posts"):
    now = datetime.now()
    date_str = now.strftime("%Y-%m-%d")
    time_str = f"{date_str} 00:00:00 +0800"

    slug = slugify(title)
    filename = f"{date_str}-{slug}.md"
    filepath = os.path.join(folder, filename)

    yaml_content = f"""---
layout: post
title: "{title}"
date: {time_str}
---

"""

    os.makedirs(folder, exist_ok=True)
    if os.path.exists(filepath):
        print(f"File already exists: {filepath}")
        return

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(yaml_content)

    print(f"Successfully created new post:")
    print(f"Path: {filepath}")


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python new.py \"your article title\"")
        print("Example: python new.py \"2026 CSS application experience summary\"")
    else:
        title = sys.argv[1]
        create_post(title)
