import React from "react";

const Profile = () => {
  return (
    <>
    <div className="h-[90vh] flex place-content-center">
      <div class="m-20 max-w-sm">
        <div class="rounded-lg border bg-white px-4 pt-8 pb-10 shadow-lg">
          <div class="relative mx-auto w-36 rounded-full">
            <span class="absolute right-0 m-3 h-3 w-3 rounded-full bg-green-500 ring-2 ring-green-300 ring-offset-2"></span>
            <img
              class="mx-auto h-auto w-full rounded-full"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
              alt=""
            />
          </div>
          <h1 class="my-1 text-center text-xl font-bold leading-8 text-gray-900">
            User,
          </h1>
          <h3 class="font-lg text-semibold text-center leading-6 text-gray-600">
            Marketing Exec. at Denva Corp
          </h3>
          <p class="text-center text-sm leading-6 text-gray-500 hover:text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Architecto, placeat!
          </p>
          <ul class="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
            <li class="flex items-center py-3 text-sm">
              <span>Status</span>
              <span class="ml-auto">
                <span class="rounded-full bg-green-200 py-1 px-2 text-xs font-medium text-green-700">
                  Open for side gigs
                </span>
              </span>
            </li>
            <li class="flex items-center py-3 text-sm">
              <span>Joined On</span>
              <span class="ml-auto">Apr 08, 2022</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </>
  );
};

export default Profile;