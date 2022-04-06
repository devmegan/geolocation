export default function AccuracyToggle({ handleToggle }) {

    return (
        <div className="w-1/2 mx-auto mt-4">
            <label className="label cursor-pointer">
                <span className="label-text">High accuracy</span>
                <input type="checkbox" className="toggle toggle-primary" onChange={handleToggle}/>
            </label>
        </div>
    )
}