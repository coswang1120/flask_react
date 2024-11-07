# wsgi.py
from myapp import create_app  # 假设你的Flask应用工厂函数在myapp模块中

app = create_app()

if __name__ == "__main__":
    app.run()