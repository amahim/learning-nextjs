import { db } from "@/config/db.jsx";

const StaticPage = async () => {
  const [doctors] = await db.execute("SELECT * FROM doctors");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Our Medical Professionals
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doctor) => (
            <div
              key={doctor.doctor_id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6">
                <h2 className="text-2xl font-bold text-white">
                  Dr. {doctor.first_name} {doctor.last_name}
                </h2>
                <p className="text-blue-100 mt-1">{doctor.specialization}</p>
              </div>

              <div className="p-6">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="text-gray-600 font-medium w-20">
                      Gender:
                    </span>
                    <span className="text-gray-800">{doctor.gender}</span>
                  </div>

                  <div className="flex items-center">
                    <span className="text-gray-600 font-medium w-20">
                      Email:
                    </span>
                    <a
                      href={`mailto:${doctor.email}`}
                      className="text-blue-600 hover:text-blue-800 hover:underline"
                    >
                      {doctor.email}
                    </a>
                  </div>

                  <div className="flex items-center">
                    <span className="text-gray-600 font-medium w-20">ID:</span>
                    <span className="text-gray-500 text-sm">
                      #{doctor.doctor_id}
                    </span>
                  </div>
                </div>

                <button className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StaticPage;
