from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("base.html")
#@app.route('/company')
#def company():
 #   return render_template("base.html")
    
if __name__ == '__main__':
    print("Running the app")
    app.run(debug=True)