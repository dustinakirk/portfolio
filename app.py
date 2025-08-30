from flask import Flask, jsonify, render_template_string
import os
from datetime import datetime

app = Flask(__name__)

HTML_TEMPLATE = '''
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flask Vercel App</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 2rem;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
        }
        .container {
            background: white;
            border-radius: 10px;
            padding: 2rem;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        h1 {
            color: #333;
            margin-bottom: 1rem;
        }
        .info {
            background: #f5f5f5;
            padding: 1rem;
            border-radius: 5px;
            margin: 1rem 0;
        }
        .endpoints {
            margin-top: 2rem;
        }
        .endpoint {
            background: #e9ecef;
            padding: 0.5rem 1rem;
            margin: 0.5rem 0;
            border-radius: 5px;
            font-family: monospace;
        }
        a {
            color: #667eea;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🚀 Flask App on Vercel</h1>
        <p>Welcome to your Flask application deployed on Vercel!</p>
        
        <div class="info">
            <strong>Server Time:</strong> {{ server_time }}<br>
            <strong>Environment:</strong> {{ environment }}
        </div>
        
        <div class="endpoints">
            <h2>Available Endpoints:</h2>
            <div class="endpoint">
                <a href="/">/ (Home)</a> - This page
            </div>
            <div class="endpoint">
                <a href="/api/hello">/api/hello</a> - JSON API endpoint
            </div>
            <div class="endpoint">
                <a href="/api/info">/api/info</a> - System information
            </div>
        </div>
    </div>
</body>
</html>
'''

@app.route('/')
def home():
    return render_template_string(HTML_TEMPLATE, 
                                 server_time=datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
                                 environment=os.getenv('VERCEL_ENV', 'Development'))

@app.route('/api/hello')
def hello_api():
    return jsonify({
        'message': 'Hello from Flask on Vercel!',
        'timestamp': datetime.now().isoformat(),
        'status': 'success'
    })

@app.route('/api/info')
def info_api():
    return jsonify({
        'app_name': 'Flask Vercel App',
        'python_version': os.sys.version,
        'environment': os.getenv('VERCEL_ENV', 'Development'),
        'region': os.getenv('VERCEL_REGION', 'Unknown'),
        'timestamp': datetime.now().isoformat()
    })

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)