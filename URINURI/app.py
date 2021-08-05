from flask import Flask, render_template
import sys



app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/calendar")
def calendar():
    return render_template("calendar.html")

@app.route("/search")
def search():
    return render_template("search.html")
    
if __name__ == "__main__":
    app.run(host = "0.0.0.0", debug = True)


