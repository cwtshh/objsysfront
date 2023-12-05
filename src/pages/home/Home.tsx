import { useEffect, useState } from 'react';
import './Home.css';
import axios from 'axios';
import GroupCard from '../../components/group-card/GroupCard';
/* const GroupSchema = new Schema({
  name: String,
  description: String,
  lider: {
      type: Schema.Types.ObjectId,
      ref: 'Student'
  },
  students: Array
}, {
  timestamps: true
}); */

interface Group {
  name: String,
  description: String,
  lider: String,
  students: Array<String>
}

const Home = () => {
  const [groups, setGroups] = useState<Group[]>([]);

  const getAllGroups = async () => {
    try {
      const res = await axios.get('http://localhost:5000/group/');
      setGroups(res.data);
      console.log(groups);

    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllGroups();
  }, []);


  return (
    <div className='home'>
      <div className='group-section'>
        {groups.map((group) => (
          <GroupCard {...group} />
        ))}
      </div>
    </div>
  )
}

export default Home;