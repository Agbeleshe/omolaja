import Image from "next/image";
import license from "@/public/practcing-license.png"; // Ensure image is in public folder

export const PracticingLicenseCard = () => {
  return (
    <div className="bg-white border border-blue-100 my-5 rounded-3xl p-8 shadow-xl max-w-3xl mx-auto transition-all duration-300 hover:shadow-2xl">
      <div className="mb-6">
        <h2 className="text-3xl font-extrabold text-blue-800 tracking-tight">
          Nigerian Bar Association
        </h2>
        <p className="text-lg text-gray-500">Practicing License – 2025</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
          <Image
            src={license}
            alt="Nigerian Bar Association Practicing License - 2025"
            width={600}
            height={500}
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <p className="text-gray-700 text-base leading-relaxed mb-4">
              This is the official 2025 practicing license of{" "}
              <span className="font-semibold text-blue-700">
                Barrister Omolaja Agbeleshe
              </span>
              , issued by the Nigerian Bar Association (NBA). It confirms his
              authorization to practice law in Nigeria.
            </p>

            <ul className="text-sm space-y-2 mt-4">
              <li>
                <span className="font-medium text-gray-600">SCN:</span>{" "}
                <span className="text-gray-900">SCN046211</span>
              </li>
              <li>
                <span className="font-medium text-gray-600">NBA Branch:</span>{" "}
                <span className="text-gray-900">Abeokuta</span>
              </li>
              <li>
                <span className="font-medium text-gray-600">Valid Until:</span>{" "}
                <span className="text-gray-900">31st December 2025</span>
              </li>
            </ul>
          </div>

          <div className="mt-6">
            <span className="inline-block bg-blue-50 text-blue-700 text-sm font-medium px-4 py-2 rounded-full shadow-sm">
              Licensed & Verified
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
