from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # 允許跨來源請求

# 新增環境配置
app.config['ENV'] = 'development'
app.config['DEBUG'] = True
CORS(app)  # 允許跨來源請求

@app.route('/api/validate', methods=['POST'])
def validate():
    data = request.json
    name = data.get('name', '').strip()

    if len(name) < 3:
        return jsonify({'message': '名字必須至少包含 3 個字元'}), 400
    else:
        return jsonify({'message': f'驗證成功，歡迎 {name}！'}), 200

if __name__ == '__main__':
    app.run(debug=True)