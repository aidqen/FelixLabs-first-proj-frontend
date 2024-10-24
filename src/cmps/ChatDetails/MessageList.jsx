import { MessagePreview } from './MessagePreview'

export function MessageList({ chatData }) {
  console.log('chatData:', chatData)

  return (
    <div className="messages flex flex-col gap-4 p-4 h-full overflow-auto">
      {chatData.map((message, idx) => {
        return <MessagePreview key={idx} message={message} />
      })}
    </div>
  )
}
