from flask import Flask


def create_app():
    app = Flask(__name__)
    # 配置你的应用
    return app