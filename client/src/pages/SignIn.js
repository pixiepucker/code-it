import React from 'react';

function SignIn() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-1 w-full bg-cadet md:p-12">
      <div className="md:p-6 sm:p-4 flex flex-wrap justify-center">
        <img
          src={require('../assets/images/logo.png')}
          className="pb-2"
          alt="note w code on it"
        />
        <p className="sm:text-center sm:text-xl md:text-left md:text-3xl">
          Code_it is a noting-taking app made specially for your code. Create a
          note, add code snippets, personal notes and edit them at any time.
          Create folders to set up an organized directory, or keep your notes in
          a random piled collection. Sign up or log in to get started.
        </p>
      </div>
      <div className="flex flex-col justify-center sm:p-6">
        <form className="max-w-[400px] w-full mx-auto bg-antique p-4">
          <h2 className="text-3xl font-bold text-center py-6">
            Welcome to Code_It
          </h2>
          <div className="flex flex-col py-2">
            <label>email:</label>
            <input className="border p-2" type="text" />
          </div>
          <div className="flex flex-col py-2">
            <label>password:</label>
            <input className="border p-2" type="password" />
          </div>
          <button className="border w-full my-5 py-2 bg-mellow hover:bg-lime-500 text-white">
            Sign In
          </button>
          <div className="flex justify-between">
            <button>Create an account</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
