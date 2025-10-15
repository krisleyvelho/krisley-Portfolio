import { useI18nStore } from "@/utils/i18n-state";
import { SectionTitle } from "./ui/section-title";

export function AboutMe() {
  const { currentDictionary } = useI18nStore();
  return (
    <div className="bg-white rounded-lg shadow">
      <SectionTitle title={currentDictionary['aboutMe']} />
      <div>


      </div>
     {/*  <div className="px-6 py-4 border-b">
        <h2 className="text-xl font-semibold">About Me</h2>
      </div>
      <div className="divide-y">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
          <div key={i} className="px-6 py-4 hover:bg-gray-50 transition-colors">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-gray-900">Atividade #{i}</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Descrição detalhada da atividade realizada no sistema.
                </p>
              </div>
              <span className="text-sm text-gray-500 whitespace-nowrap ml-4">
                {i}h atrás
              </span>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  )
}