import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TodayTodo from "./todopages/TodayTodo";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
    <Card className = "sm:w-1/2 h-auto">
        <CardHeader className="flex justify-center items-center">
            <CardTitle className="text-2xl font-bold">My Todo List</CardTitle>
        </CardHeader>
        <CardContent>
        <p>📌 React 와 vite, typescript를 사용하여 만든 투두 리스트 웹애플리케이션</p>
        <p>! 사용자는 할 일을 추가, 수정, 삭제하여 할 일들을 관리합니다.</p>
        <p>! 할 일 카드를 클릭하면 입력하신 전체 내용을 수정하거나 확인할 수 있습니다.</p>
        <p>! 할 일을 추가할 때는 제목, 내용, 만료일을 입력합니다. Left 탭에서는 앞으로 해야 할 모든 일들을 남은 날짜와 함께 확인할 수 있습니다!</p>
        <p>! 체크버튼을 누르면 할 일이 완료된 것으로 표시되며, completed 탭에서 확인할 수 있습니다.</p>
        <p>! 삭제 버튼을 누르면 soft-delete 처리되어 삭제되지 않고 보관되지만, 사용자는 확인할 수 없습니다.</p>
        <br></br>
        <p>🔧 사용한 기술 스택</p>
        <p>React : 19.0.0, vite : 6.1.0, typescript : 5.7.2, tailwindcss : 4.0.5, shadcn/ui : 2.3.0</p>
        <br></br>
        <p>🔗 GitHub: <a href="https://github.com/keyy1315/myTodo-project/tree/main/src">https://github.com/keyy1315/myTodo-project/tree/main/src</a></p>
        </CardContent>
    </Card>
    <TodayTodo />
    </div>
  );
}
